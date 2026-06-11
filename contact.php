<?php
header('Content-Type: application/json; charset=utf-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';
require __DIR__ . '/phpmailer/src/Exception.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Užpildykite vardą, el. paštą ir žinutę.']);
  exit;
}

if (!empty($data['website'] ?? '')) {
  echo json_encode(['ok' => true]);
  exit;
}

$smtpHost = getenv('SMTP_HOST') ?: 'smtp.hostinger.com';
$smtpUser = getenv('SMTP_USER');
$smtpPass = getenv('SMTP_PASS');
$smtpPort = (int) (getenv('SMTP_PORT') ?: 465);
$mailTo = getenv('MAIL_TO') ?: 'info@fazis.lt';
$mailFrom = getenv('SMTP_FROM') ?: $smtpUser;

if (!$smtpUser || !$smtpPass || !$mailFrom) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Kontaktų forma dar nesukonfigūruota.']);
  exit;
}

try {
  $mail = new PHPMailer(true);
  $mail->isSMTP();
  $mail->Host = $smtpHost;
  $mail->SMTPAuth = true;
  $mail->Username = $smtpUser;
  $mail->Password = $smtpPass;
  $mail->Port = $smtpPort;
  $mail->SMTPSecure = $smtpPort === 465
    ? PHPMailer::ENCRYPTION_SMTPS
    : PHPMailer::ENCRYPTION_STARTTLS;
  $mail->CharSet = 'UTF-8';

  $mail->setFrom($mailFrom, 'Fazis');
  $mail->addAddress($mailTo);
  $mail->addReplyTo($email, $name);

  $safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
  $safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
  $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

  $mail->Subject = 'Nauja žinutė iš fazis.lt kontaktų formos';
  $mail->isHTML(true);
  $mail->Body =
    "<p><strong>Vardas:</strong> {$safeName}</p>" .
    "<p><strong>El. paštas:</strong> {$safeEmail}</p>" .
    "<p><strong>Žinutė:</strong></p><p>{$safeMessage}</p>";
  $mail->AltBody = "Vardas: {$name}\nEl. paštas: {$email}\n\nŽinutė:\n{$message}";

  $mail->send();
  echo json_encode(['ok' => true]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Nepavyko išsiųsti žinutės.']);
}
