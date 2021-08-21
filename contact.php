<?php
  
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
      
    require 'vendor/autoload.php';
      if(isset($_POST['submit'])){
         $mail = new PHPMailer(true);
      
         try {
             $mail->SMTPDebug = 2;                                       
             $mail->isSMTP();                                            
             $mail->Host       = 'smtp.gmail.com';                    
             $mail->SMTPAuth   = true;                             
             $mail->Username   = 'samueladdisu7@gmail.com';                 
             $mail->Password   = '$@m1842Dontquit';                        
             $mail->SMTPSecure = 'tls';                              
             $mail->Port       = 465;  
           
             $mail->setFrom('samueladdisu7@gmail.com', 'Samuel');           
             $mail->addAddress('sales@versavvymedia.com');
             // $mail->addAddress('receiver2@gfg.com', 'Name');
                
             $mail->isHTML(true);                                  
             $mail->Subject = $_POST['subject'];
             $mail->Body    = $_POST['msg'];
             // $mail->AltBody = $_POST['msg'];
             if($mail->send()){
               echo "<script> alert('message sent');</script>";
               echo "Mail has been sent successfully!";
             }
         } catch (Exception $e) {
             echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
         }
      }
   
      // if(isset($_POST['submit'])){
      //   echo 'form submitted';
      //   // $name = $_POST['fname'];
      //   $to = 'sales@versavvymedia.com';
      //   $header = $_POST['email'];
      //   $subject = $_POST['subject'];
      //   $msg = $_POST['msg'];
    
      //   if ( mail($to, $subject, $msg, $header)) {
      //       echo '<script> alert("message sent"); </script>';
      //       header('Location: ./contact.html');
      //    } else {
      //       echo("Email sending failed...");
      //    }
      // }
    
    ?>