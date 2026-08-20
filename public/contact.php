<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Metodas neleidžiamas.']);
    exit;
}

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

$to = 'info@fazis.lt';
$subject = 'Nauja žinutė iš Fazis.lt kontaktų formos';
$body = "Gauta nauja žinutė iš fazis.lt kontaktų formos:\n\n";
$body .= "Vardas: {$name}\n";
$body .= "El. paštas: {$email}\n\n";
$body .= "Žinutė:\n{$message}\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: Fazis.lt <info@fazis.lt>';
$headers[] = 'Reply-To: ' . $safeName . ' <' . $safeEmail . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$sent = mail($to, $encodedSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Nepavyko išsiųsti žinutės. Bandykite dar kartą.']);
    exit;
}

echo json_encode(['ok' => true]);
