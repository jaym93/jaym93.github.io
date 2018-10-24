﻿<?php 

require_once "recaptchalib.php";
$captcha=$_POST['captcha'];
$secret = "6Ld6hCMUAAAAAOdlP7tKDjnpY5e_rq7Kg_G02dOP";
// empty response
$response = null;
// check secret key
$reCaptcha = new ReCaptcha($secret);
if ($_POST["captcha"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["captcha"]
    );
}
if(isset($_POST['email'])){
    $to = "support@yaxa.io"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $phone = $_POST['phone'];
    $name = $_POST['name'];
    $subject = "Message from " . $name . " on Yaxa.io website";
    $subject2 = "Copy of your Message from Yaxa.io";
    $message = $name . "(Email: " . $from . ", Phone: " . $phone . ") wrote the following:" . "\n\n" . $_POST['comments'];
    $message2 = "Thank you for contacting us!" . $name . "\nHere is a copy of your message: " . "\n\n" . $_POST['comments'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "<p style='color:limegreen; font-weight:700; font-size:200%;'>Message successfully sent!</p>";
    }
    else{
    echo "<p style='color:red; font-weight:700; font-size:200%;'>Could not send message, try again or email <a href='mailto:support@yaxa.io'>support@yaxa.io</a></p> ";
    }
   
?>  