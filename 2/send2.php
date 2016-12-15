<?php
function mime_header_encode($str, $data_charset = '', $send_charset = '') {
	if($data_charset != $send_charset) {
	$str = iconv($data_charset, $send_charset, $str);
	}
	return '=?' . $send_charset . '?B?' . base64_encode($str) . '?=';
}


function send_mime_mail($name_from, $email_from, $name_to, $email_to, $data_charset, $send_charset, $subject, $body){
	$to = mime_header_encode($name_to, $data_charset, $send_charset).' <' . $email_to . '>';
	$subject = mime_header_encode($subject, $data_charset, $send_charset);
	$from =  mime_header_encode($name_from, $data_charset, $send_charset).' <' . $email_from . '>';
	if($data_charset != $send_charset) {
		$body = iconv($data_charset, $send_charset, $body);
	}
	$headers = "From: $from\r\n";
	$headers .= "Content-type: text/html; charset=$send_charset\r\n";
	return mail($to, $subject, $body, $headers);
}

if(!empty($_POST)){
	$arUsers = array(
		array(
			"NAME"=>"BOOSTER",
			"EMAIL"=>"delivery@farmastor.com"
		),
        array(
			"NAME"=>"BOOSTER",
			"EMAIL"=>"sale@eyelashbooster.com.ua"
		),
        array(
			"NAME"=>"BOOSTER",
			"EMAIL"=>"pharmatheissbooster@gmail.com"
		),
		array(
			"NAME"=>"BOOSTER",
			"EMAIL"=>"alex@volta.one"
		),
	);

    $message = '';
    $message .= "<b>Ім'я:</b><br/>".$_POST['name']."<br/><br/>";
    $message .= "<b>Прізвище:</b><br/>".$_POST['sername']."<br/><br/>";
    $message .= '<b>Телефон:</b><br/>'.$_POST['phone'].'<br/><br/>';
    $message .= '<b>Кількість:</b><br/>'.$_POST['kol'].'<br/><br/>';
    $message .= '<b>Сыворотка Eyelash Booster для роста и укрепления ресниц 2,7 мл Айлеш Бустер</b><br/><br/>';
    $message .= '<b>Код:</b> 242678<br/><br/>';
    $message .= '<b>Ціна:</b> 599 грн<br/><br/>';

	foreach ($arUsers as $Item){
		$r = send_mime_mail("EYELASHBOOSTER", "delivery@farmastor.com", $Item['NAME'], $Item['EMAIL'], 'utf-8', 'utf-8', "Замовлення на сайті EYELASHBOOSTER", $message);
	}
}
?>
