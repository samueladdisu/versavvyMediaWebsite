<?php 

    if(isset($_POST['submit'])){
        // echo $_POST['fname'];
        // echo $_POST['email'];
        // echo $_POST['subject'];
        // echo $_POST['msg'];

        try {
            $to = 'samuel@versavvymedia.com';
            $subject = $_POST['subject'];
            $msg = $_POST['msg'];
            $header = 'From: '. $_POST['email'] . "\r\n" .
            'Reply-To: '. $_POST['email'] . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
            if(mail($to, $subject, $msg, $header)){
                
                echo "<script> alert('message sent');</script>";
            }

        } catch(Exception $e){
            echo 'Caught exception: ', $e->getMessage(), "\n";
        }
        
    }