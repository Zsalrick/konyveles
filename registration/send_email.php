<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendro/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use phpmailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "kiss01adam77@gmail.com";
$mail->Password = "gtbdueqfglywrjmv";

$mail->setFrom($email, $name);
$mail->addAddress("kiss01adam77@gmail.com", "Adam K");

$mail->Subject = $subject;
$mail->Body = $message; 

$mail->send();

echo "Üzenet elküldve!";

