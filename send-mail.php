<meta charset="utf-8">
<?php

$data_charset = 'UTF8'; // кодировка переданных данных
$send_charset = 'KOI8-R'; // кодировка письма

$to = 'hello@volta.one'; // Меняем почту


$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];


// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
 if ( isset($email) && isset($name) && isset($subject) && isset($message) && filter_var($email, FILTER_VALIDATE_EMAIL) ) {
 
  // определить и не допустить инъекцию хэдэров
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }

$body = <<<EMAIL
subject : $subject
  
Добрый день, меня зовут $name.

$message

From : $name
Email : $email

EMAIL;
  
  
$header = 'From: ' . $_POST["name"] . '<' . $_POST["email"] . '>' . "\r\n" .
    'Reply-To: ' . $_POST["email"] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  //
 // mail( $to , $_POST['subject'], $_POST['message'], $headers );
 mail($to, $subject, $body, $header);
}
?>