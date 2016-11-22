/*jQuery(document).ready(function($) {
  $("#contact-submit").click(function(){
		var nume = $("#contact_name").val();
		var email = $("#contact_email").val();
		var mesaj = $("#contact_message").val();
		if(nume.length == 0 || email.length == 0 || mesaj.length == 0){
			alert("Va rugam sa completati toate campurile");
		}
		else
		{
			$.post("contact.php",{senderName: nume, senderEmail: email, message: mesaj},function(data){
				$("#response").html(data);
		  })
		}
  });
});*/