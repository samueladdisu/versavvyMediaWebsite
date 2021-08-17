<?php
   
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
    if(isset($_POST['submit'])){
     
        
        require '/home/cpanelusername/PHPMailerTest/PHPMailer/src/Exception.php';
        require '/home/cpanelusername/PHPMailerTest/PHPMailer/src/PHPMailer.php';
        require '/home/cpanelusername/PHPMailerTest/PHPMailer/src/SMTP.php';
        
        // Instantiation and passing [ICODE]true[/ICODE] enables exceptions
        $mail = new PHPMailer(true);
        
        try {
         //Server settings
         $mail->SMTPDebug = 2; // Enable verbose debug output
         $mail->isSMTP(); // Set mailer to use SMTP
         $mail->Host = 'versavvymedia.com'; // Specify main and backup SMTP servers
         $mail->SMTPAuth = true; // Enable SMTP authentication
         $mail->Username = 'user@example.com'; // SMTP username
         $mail->Password = 'secret'; // SMTP password
         $mail->SMTPSecure = 'tls'; // Enable TLS encryption, [ICODE]ssl[/ICODE] also accepted
         $mail->Port = 587; // TCP port to connect to
        
        //Recipients
         $mail->setFrom('from@example.com', 'Mailer');
         $mail->addAddress('sales@versavvymedia.com', 'Joe User'); // Add a recipient
         $mail->addAddress('recipient2@example.com'); // Name is optional
         $mail->addReplyTo('info@example.com', 'Information');
         $mail->addCC('cc@example.com');
         $mail->addBCC('bcc@example.com');
        

        
        // Content
         $mail->isHTML(true); // Set email format to HTML
         $mail->Subject = $_POST["subject"];
         $mail->Body = $_POST['msg'];
         $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
        $mail->send();
         echo 'Message has been sent';
        
        } catch (Exception $e) {
         echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
