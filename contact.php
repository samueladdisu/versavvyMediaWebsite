<?php
    echo $_POST["submit"];
    if(isset($_POST['submit'])){

        echo 'form submitted';
        // $name = $_POST['fname'];
        $to = 'samuel@versavvymedia.com';
        $header =  'From: ' . $_POST['email'] . "\r\n" . 
        
            'Reply-To: test@test.com' . "\r\n" . 
        
            'X-Mailer: PHP/' . phpversion();
        $subject = $_POST['subject'];
        $msg = $_POST['msg'];

        if ( mail($to, $subject, $msg, $header)) {
            header('Location: ./contact.html');
         } else {
            echo("Email sending failed...");
         }
    }
