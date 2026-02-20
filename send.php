<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $to = "sadra.daryabazz@gmail.com"; //my gmail
    $subject = "New message from website";
    $message = "Name: ".$_POST['name']."\nEmail: ".$_POST['email']."\nMessage: ".$_POST['message'];
    $headers = "From: ".$_POST['email'];
    mail($to, $subject, $message, $headers);
}
?>
