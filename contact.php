<?php

    if(isset($_POST['submit'])){
     
      
        echo 'form submitted';
        // $name = $_POST['fname'];
        $to = 'samueladdisu7@gmail.com';
        $header = $_POST['email'];
        $subject = $_POST['subject'];
        $msg = $_POST['msg'];

        if ( mail($to, $subject, $msg, $header)) {
            echo "<script> alert('message sent sucssesfully'); </script>";
            header('Location: ./contact.html');
         } else {
            echo("Email sending failed...");
            echo "<script> alert('message not sent'); </script>";
         }
    }
