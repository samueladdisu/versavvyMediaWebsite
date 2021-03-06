<?php

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
// use PHPMailer\PHPMailer\Exception;

// require 'vendor/autoload.php';

// $dotenv = Dotenv\Dotenv::createMutable(__DIR__);
// $dotenv->load();

// echo $_ENV['EMAIL'];
// if (isset($_POST['submit'])) {
//     //Create an instance; passing `true` enables exceptions
// $mail = new PHPMailer(true);

// try {
//     //Server settings
//     $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
//     $mail->isSMTP();                                            //Send using SMTP
//     $mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
//     $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
//     $mail->Username   = 'user@example.com';                     //SMTP username
//     $mail->Password   = 'secret';                               //SMTP password
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
//     $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//     //Recipients
//     $mail->setFrom('from@example.com', 'Mailer');
//     $mail->addReplyTo('info@example.com', 'Information');


//     //Content
//     $mail->isHTML(true);                                  //Set email format to HTML
//     $mail->Subject = 'Here is the subject';
//     $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
//     $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

//     $mail->send();
//     echo 'Message has been sent';
// } catch (Exception $e) {
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }
// }

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-CQ456KPZQ6"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-CQ456KPZQ6');
    </script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./assets/fav-icon.png" type="image/x-icon">
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="./css/style.css">

    <title>Contact Us | Versavvy Media PLC</title>
</head>

<body>
    <header class="header"></header>

    <main>
        <img src="./assets/contact/contactBlob.png" class="contact-blob" alt="">
        <img src="./assets/broadcast/blob-plus.png" class="c-blob" alt="">
        <div class="container row">

            <section class="contact-info col-md-5">
                <p class="contact-subtitle">
                    contact us
                </p>
                <h1 class="contact-title">
                    Get in Touch
                </h1>

                <div class="contact-details">
                    <div class="contact-content">
                        <div class="icon">
                            <i class='bx bx-phone'></i>
                        </div>

                        <div class="text">
                            <a href="tel:+251115574409">+251 11 557 4409</a>
                        </div>
                    </div>
                    <div class="contact-content">
                        <div class="icon">
                            <i class='bx bx-envelope-open'></i>
                        </div>

                        <div class="text">
                            <p><a href="mailto:info@versavvymedia.com">info@versavvymedia.com</a> </p>
                            <p><a href="mailto:sales@versavvymedia.com">sales@versavvymedia.com</a></p>
                        </div>
                    </div>
                    <div class="contact-content">
                        <div class="icon">
                            <i class='bx bx-map'></i>
                        </div>
                        <div class="text">
                            Sterling Bldg. | First Floor
                            Olympia, Gazebo Roundabout
                            Addis Ababa, Ethiopia
                        </div>

                    </div>
                </div>

                <div class="socials">
                    <h2 class="social-title">
                        Follow us on
                    </h2>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/versavvymedia/" target="_blank"><i class='bx bxl-instagram'></i></a>
                        <a href="https://t.me/PetrosTsegaye" target="_blank"><i class='bx bxl-telegram'></i></a>

                        <a href="https://www.facebook.com/VersavvyMediaPLC" target="_blank"><i class='bx bxl-facebook-circle'></i></a>
                        <a href="https://www.linkedin.com/company/versavvy-media" target="_blank"><i class='bx bxl-linkedin-square'></i></a>
                    </div>
                </div>
            </section>

            <section class="contact-form col-xl-offset-1 col-md-6">

                <div class="bg">
                    <form name="myform" action="https://formsubmit.co/sales@versavvymedia.com" class="form" method="POST">
                        <label for="name">Name*</label>
                        <input type="text" name="name" id="name" required>

                        <label for="email">Email*</label>
                        <input type="email" name="email" id="email" required>

                        <label for="subject">Subject</label>
                        <input type="text" name="_subject" id="subject">
                        <!-- <input type="hidden" name="_subject"> -->
                        <label for="msg">Message*</label>
                        <input type="hidden" name="_template" value="table">
                        <textarea name="msg" id="message" cols="30" rows="10" required></textarea>

                        <button type="submit" name="submit" class="btn btn-outline-secondary">Send Message</button>
                    </form>
                </div>

            </section>
        </div>

    </main>

    <section class="map">
        <div class="container">
            <div class="location">


                <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.29382703312106!2d38.76740810055855!3d8.999614764146251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85589b384d7f%3A0x9ff860608305d20b!2sVersavvy%20Media%20PLC!5e0!3m2!1sen!2set!4v1628245095114!5m2!1sen!2set" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>

            </div>
        </div>

    </section>

    <footer class="footer"></footer>

    <script src="./js/ds.js" type="module"></script>
</body>

</html>