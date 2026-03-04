<?php

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");
$recipient = "nikoletapapa01@hotmail.com";
$serverDomain = str_replace("www.", "", $_SERVER['SERVER_NAME']);
$senderEmail = "noreply@" . $serverDomain;

switch ($_SERVER['REQUEST_METHOD']) {

    case 'OPTIONS':
        http_response_code(200);
        exit;

    case 'POST':
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        if (json_last_error() !== JSON_ERROR_NONE) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
            exit;
        }

        $email = $params->email ?? '';
        $name = $params->name ?? '';
        $userMessage = $params->message ?? '';

        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || empty($name) || empty($userMessage)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Invalid input data']);
            exit;
        }

        $safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
        $safeMessage = nl2br(htmlspecialchars($userMessage, ENT_QUOTES, 'UTF-8'));

        $subject = 'New Message from Portfolio: ' . $safeName;

        $mailBody = "
            <h2>New Contact Request</h2>
            <p><strong>Name:</strong> {$safeName}</p>
            <p><strong>Email:</strong> {$safeEmail}</p>
            <hr>
            <p><strong>Message:</strong><br>
            {$safeMessage}</p>
        ";

   
        $headers = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        
        $headers[] = 'From: Portfolio Form <' . $senderEmail . '>';
        $headers[] = 'Reply-To: ' . $safeEmail;
        
        $headers[] = 'X-Mailer: PHP/' . phpversion();
        $success = mail(
            $recipient,
            $subject,
            $mailBody,
            implode("\r\n", $headers),
            '-f' . $senderEmail
        );

        if ($success) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => 'Mail server error']);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'error' => 'Method not allowed']);
        exit;
}
?>