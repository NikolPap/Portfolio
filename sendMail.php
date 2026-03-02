<?php

// ------------------------------------------------------------
// CONFIGURATION: CORS & HEADERS
// ------------------------------------------------------------
// Allow requests from any origin (or specify your domain)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// ------------------------------------------------------------
// SETTINGS
// ------------------------------------------------------------

// >>> YOUR EMAIL ADDRESS GOES HERE <<<
$recipientEmail = "nikoletapapa01@hotmail.com";

// ------------------------------------------------------------
// LOGIC
// ------------------------------------------------------------

switch ($_SERVER['REQUEST_METHOD']) {

    // Handle Preflight Request (CORS)
    case 'OPTIONS':
        http_response_code(200);
        exit;

    // Handle Form Submission
    case 'POST':
        // 1. Get raw JSON input
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        // 2. Validate JSON structure
        if (json_last_error() !== JSON_ERROR_NONE) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Invalid JSON format']);
            exit;
        }

        // 3. Extract variables safely
        $email = $params->email ?? '';
        $name = $params->name ?? '';
        $userMessage = $params->message ?? '';

        // 4. Validate input fields
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || empty($name) || empty($userMessage)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Please fill in all fields correctly.']);
            exit;
        }

        // 5. Sanitize inputs (Security: Prevent XSS/Injection)
        $safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
        $safeMessage = nl2br(htmlspecialchars($userMessage, ENT_QUOTES, 'UTF-8'));

        // ------------------------------------------------------------
        // EMAIL HEADER CONSTRUCTION (CRITICAL FOR DELIVERY)
        // ------------------------------------------------------------
        
        // Get the current server domain (e.g., yourwebsite.com)
        $serverDomain = $_SERVER['SERVER_NAME'];
        
        // Remove 'www.' if present to ensure a clean domain
        $serverDomain = str_replace('www.', '', $serverDomain);
        
        // Fallback for localhost environments
        if ($serverDomain == 'localhost') {
            $serverDomain = 'example.com'; 
        }

        // Define the Sender Address.
        // MUST be an email from YOUR server domain to avoid Spam filters.
        // We use 'noreply' here, but the 'Reply-To' header handles the actual reply.
        $senderEmail = "noreply@" . $serverDomain;

        $subject = "Contact Form: " . $safeName;

        // Construct the Email Body (HTML)
        $mailBody = "
            <html>
            <head>
                <title>New Message</title>
            </head>
            <body style='font-family: sans-serif; color: #333;'>
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> {$safeName}</p>
                <p><strong>Email:</strong> <a href='mailto:{$safeEmail}'>{$safeEmail}</a></p>
                <hr>
                <p><strong>Message:</strong></p>
                <div style='background: #f9f9f9; padding: 15px; border-left: 4px solid #3dcfb6;'>
                    {$safeMessage}
                </div>
            </body>
            </html>
        ";

        // Construct Headers
        $headers = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=UTF-8';
        
        // 'From' -> Must match the server domain
        $headers[] = 'From: Website Contact <' . $senderEmail . '>';
        
        // 'Reply-To' -> This is the visitor's email.
        // When you click 'Reply' in Hotmail, it will go to this address.
        $headers[] = 'Reply-To: ' . $safeEmail;
        
        $headers[] = 'X-Mailer: PHP/' . phpversion();

        // 6. Send the Email
        // The '-f' parameter sets the envelope sender, improving deliverability.
        $success = mail(
            $recipientEmail,
            $subject,
            $mailBody,
            implode("\r\n", $headers),
            "-f" . $senderEmail
        );

        // 7. Return Response to Frontend
        if ($success) {
            http_response_code(200);
            echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => 'Server error: Mail could not be sent.']);
        }

        break;

    default:
        // Method Not Allowed
        http_response_code(405);
        echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
        exit;
}
?>