<?php
    if(isset($_POST['submit'])){
        
        $to      = 'sales@versavvymedia.com'; 
        $subject = $_POST['subject']; 
        $message = $_POST['msg']; 
        $headers = 'From: '. $_POST['email'] . "\r\n" .  

    'X-Mailer: PHP/' . phpversion(); 

        if ( mail($to, $subject, $msg, $header)) {
            echo "<script> alert('Thanks For Contacting Us We will Respond to you shortly'); </script>";
            header('Location: ./contact.html');
         } else {
            echo("Email sending failed...");
         }
    }
