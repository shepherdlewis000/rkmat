<?php
// THIS JUST FOR DEBUGGING
 ini_set('display_errors', 1); 
 ini_set('display_startup_errors', 1); 
error_reporting(E_ALL);


/*
 *  CONFIGURE EVERYTHING HERE
 */

$BCC_ADDRESS = 'RkmatSysadmin <jk...>';
$from = 'RK-Masonry <form-mailer..>';
$sendTo = 'Rob Kale <rkmat2011...>';
$subject = 'RK Masonry and Tuckpointing Form Mail';
$fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'need' => 'Need', 'city' => 'City', 'message' => 'Message');
$okMessage = 'Contact form successfully submitted. Thank you, we will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

/* CAPTCHECK stuff - Jake added  */
$check_url = 'https://captcheck.netsyms.com/api.php';

/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
//error_reporting(E_ALL & ~E_NOTICE);

try
{
    $data = [
        'session_id' => $_POST['captcheck_session_code'],
        'answer_id' => $_POST['captcheck_selected_answer'],
        'action' => "verify"
    ];
    
    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    error_log('captcheck_selected_answer: ' . $_POST['captcheck_selected_answer']);

    $context = stream_context_create($options);
    $result = file_get_contents($check_url, false, $context);
    $resp = json_decode($result, TRUE);

    if (!$resp['result']) {
        error_log("contact.php:52 throwing error");
        //exit("CAPTCHA did not verify:" . $resp['msg']);
        throw new \Exception('CAPTCHA did not verify: ' . $resp['msg']);
    } 
    /* elseif(!isset($POST['captcheck_selected_answer'])) {
        throw new \Exception('No captcheck selected: ' . $resp['msg']);
    } */

    else {
        // The CAPTCHA is valid.
        error_log("contact.php:63 entered else");

        if(count($_POST) == 0) {  
            throw new \Exception('Form is empty!');
            error_log("contact.php:67 form is empty, throwing exception");
        }

        $emailText = "New message from the contact form at rkmasonryandtuckpointing.com\n\n";

        foreach ($_POST as $key => $value) {
            // If the field exists in the $fields array, include it in the email 
            if (isset($fields[$key])) {
                $emailText .= "$fields[$key]: $value\n";
            }
        }

        $headers = array('Content-Type: text/plain; charset="UTF-8";',
            'From: ' . $from,
            'Reply-To: ' . $_POST['email'],
            'Return-Path: ' . $from,
            'BCC: ' . $BCC_ADDRESS
        );
        mail($sendTo, $subject, $emailText, implode("\n", $headers));
        $responseArray = array('type' => 'success', 'message' => $okMessage);

        error_log("contact.php:88 setting responseArray with type success and message: " . $okMessage);
    } // end else
}
catch (\Exception $e)
{   error_log("contact.php:92 throwing exception, setting responseArray type to danger and message: " . $errorMessage); 
    $responseArray = array('type' => 'danger', 'message' => $errorMessage); 
}

// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    error_log("contact.php:99 entered if and encoded is " . $encoded);

    header('Content-Type: application/json');
    echo $encoded;
}
// else just display the message
else {
    error_log("contact.php:106 just echoing message");
    echo $responseArray['message'];
}
