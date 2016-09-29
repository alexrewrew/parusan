<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="admin@site.ua";  // e-mail админа 
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды  
$backurl="http://parusan/index.html";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
   
 
// Принимаем данные с формы 
 
$name=$_POST['name'];  
$email=$_POST['email'];  
$msg=$_POST['message']; 
  
 
// Проверяем валидность e-mail 
 
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email))) 
 
 { 
 
  echo 
"<center>Поверніться <a 
href='javascript:history.back(1)'><B>назад</B></a>. Ви 
вказали невірні данні!"; 
 
  } 
 
 else 
 
 {  
 
$msg="  
 
<p>Имя: $name</p>  
<p>E-mail: $email</p>   
<p>Сообщение: $msg</p>   
"; 
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Повідомлення 
від $name", "$msg");   
 
// Сохраняем в базу данных 
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Повідомлення від $name"); 
fwrite($f,"\n $msg ");  
fwrite($f,"\n ---------------");  
fclose($f); 
  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 1000); 
//--></script> 
 
$msg 
 
<p>Повідомлення відправлено! Зачекайте, Зараз ви будуте перенаправлені на головну сторінку...</p>";  
exit; 
 
 } 
 
?>