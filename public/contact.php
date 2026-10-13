<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Metodas neleidžiamas.']);
    exit;
}

$configPath = __DIR__ . '/contact-config.php';

if (!file_exists($configPath)) {
    error_log('Fazis contact form: missing contact-config.php.');
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Kontaktų forma dar nesukonfigūruota.']);
    exit;
}

$config = require $configPath;

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
$website = trim($data['website'] ?? '');

if ($website !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Užpildykite visus laukus.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Neteisingas el. pašto adresas.']);
    exit;
}

if (strlen($name) > 240 || strlen($email) > 180 || strlen($message) > 10000) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Žinutė per ilga.']);
    exit;
}

$cleanHeader = function ($value) {
    return trim(preg_replace('/[\r\n]+/', ' ', $value));
};

$safeName = $cleanHeader($name);
$safeEmail = $cleanHeader($email);

$requiredKeys = ['smtp_host', 'smtp_port', 'smtp_username', 'smtp_password', 'mail_to', 'mail_from', 'mail_from_name'];
foreach ($requiredKeys as $key) {
    if (empty($config[$key])) {
        error_log('Fazis contact form: missing SMTP config key ' . $key . '.');
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => 'Kontaktų forma dar nesukonfigūruota.']);
        exit;
    }
}

$subject = 'Nauja žinutė iš Fazis.lt kontaktų formos';
$body = "Gauta nauja žinutė iš fazis.lt kontaktų formos:\r\n\r\n";
$body .= "Vardas: {$name}\r\n";
$body .= "El. paštas: {$email}\r\n\r\n";
$body .= "Žinutė:\r\n{$message}\r\n";

$encodeHeader = function ($value) {
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
};

$readSmtpResponse = function ($socket) {
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;

        if (preg_match('/^\d{3}\s/', $line)) {
            break;
        }
    }

    return $response;
};

$smtpCommand = function ($socket, $command, array $expectedCodes) use ($readSmtpResponse) {
    if ($command !== null) {
        fwrite($socket, $command . "\r\n");
    }

    $response = $readSmtpResponse($socket);
    $code = (int) substr($response, 0, 3);

    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP response error: ' . trim($response));
    }

    return $response;
};

$sendSmtpMail = function ($config, $to, $from, $fromName, $replyToEmail, $replyToName, $subject, $body) use ($smtpCommand, $readSmtpResponse, $encodeHeader) {
    $host = $config['smtp_host'];
    $port = (int) $config['smtp_port'];
    $username = $config['smtp_username'];
    $password = $config['smtp_password'];
    $transport = $port === 465 ? 'ssl://' : 'tcp://';
    $socket = stream_socket_client($transport . $host . ':' . $port, $errno, $errstr, 20);

    if (!$socket) {
        throw new RuntimeException('SMTP connection failed: ' . $errstr . ' (' . $errno . ')');
    }

    stream_set_timeout($socket, 20);
    $greeting = $readSmtpResponse($socket);
    if ((int) substr($greeting, 0, 3) !== 220) {
        throw new RuntimeException('SMTP greeting failed: ' . trim($greeting));
    }

    $smtpCommand($socket, 'EHLO fazis.lt', [250]);

    if ($port !== 465) {
        $smtpCommand($socket, 'STARTTLS', [220]);
        $cryptoEnabled = stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);

        if ($cryptoEnabled !== true) {
            throw new RuntimeException('SMTP TLS enable failed.');
        }

        $smtpCommand($socket, 'EHLO fazis.lt', [250]);
    }

    $smtpCommand($socket, 'AUTH LOGIN', [334]);
    $smtpCommand($socket, base64_encode($username), [334]);
    $smtpCommand($socket, base64_encode($password), [235]);
    $smtpCommand($socket, 'MAIL FROM:<' . $from . '>', [250]);
    $smtpCommand($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
    $smtpCommand($socket, 'DATA', [354]);

    $headers = [];
    $headers[] = 'Date: ' . date(DATE_RFC2822);
    $headers[] = 'To: <' . $to . '>';
    $headers[] = 'From: ' . $encodeHeader($fromName) . ' <' . $from . '>';
    $headers[] = 'Reply-To: ' . $encodeHeader($replyToName) . ' <' . $replyToEmail . '>';
    $headers[] = 'Subject: ' . $encodeHeader($subject);
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: 8bit';
    $headers[] = 'X-Mailer: Fazis.lt contact form';

    $emailMessage = implode("\r\n", $headers) . "\r\n\r\n" . $body;
    $emailMessage = str_replace(["\r\n", "\r"], "\n", $emailMessage);
    $emailMessage = str_replace("\n", "\r\n", $emailMessage);
    $emailMessage = preg_replace('/^\./m', '..', $emailMessage);

    fwrite($socket, $emailMessage . "\r\n.\r\n");
    $response = $readSmtpResponse($socket);
    $code = (int) substr($response, 0, 3);

    if ($code !== 250) {
        throw new RuntimeException('SMTP message rejected: ' . trim($response));
    }

    try {
        $smtpCommand($socket, 'QUIT', [221, 250]);
    } catch (Throwable $ignored) {
    }

    fclose($socket);
};

try {
    $sendSmtpMail(
        $config,
        $config['mail_to'],
        $config['mail_from'],
        $config['mail_from_name'],
        $safeEmail,
        $safeName,
        $subject,
        $body
    );
} catch (Throwable $error) {
    error_log('Fazis contact form SMTP error: ' . $error->getMessage());
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Nepavyko išsiųsti žinutės. Bandykite dar kartą.']);
    exit;
}

echo json_encode(['ok' => true]);
