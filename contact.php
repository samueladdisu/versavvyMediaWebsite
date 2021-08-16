<?php
    if(isset($_POST['submit'])){
        echo 'form submited';
        echo 'form submitted';
        $to = 'samuel@versavvymedia.com';
        $header = $_POST['email'];
        $subject = $_POST['subject'];
        $msg = $_POST['msg'];

        if ( mail($to, $subject, $msg, $header)) {
            header('Location: ./contact.html');
         } else {
            echo("Email sending failed...");
         }
    }
