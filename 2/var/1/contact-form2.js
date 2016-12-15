$(document).ready(function () {
    $("#contact-form2").submit(function (e) {
        $('#error_form2').css('display','none');
        $('#success_form2').css('display','none');
        $(".errorForm").removeClass("errorForm");
        var send = true;
        if ($("#name2").val() == "") {
            send = false;
            $("#name2").addClass("errorForm");
            $('#error_form2').fadeIn('fast');
            //
            console.log('Error Name');
            //
        }
        if ($("#phone2").val() == "") {
            send = false;
            $("#phone2").addClass("errorForm");
            $('#error_form2').fadeIn('fast');
            //
            console.log('Error Phone');
            //
        }
        /*if ($("#surname").val() == "") {
            send = false;
            $("#surname").addClass("errorForm");
            $('#error_form').fadeIn('fast');
            //
            console.log('Error Surname');
            //
        }*/

        if (send) {
            var name = $("#name2").val();
            var sername = $("#surname2").val();
            var phone = $("#phone2").val();
            var kol = $("#pm3").val();

            $.ajax({
                method: "POST",
                url: "send.php",
                data: {name: name, sername: sername, phone: phone, kol: kol},
                success: function (data) {
                    if (data == "") {
                        $('#client_name2').text(name);
                        $('#error_form2').fadeOut('slow');
                        $('#success_form2').fadeIn('slow');
                        $('#contact-form2').trigger("reset");
                        //
                        /*ga('send', 'event', 'zakaz', 'click');
                        yaCounter40895659.reachGoal('FOOT');
                        return true;*/
                        //
                    }
                }
            });

        }
        //
        else {
            console.log('Error Send');
        }
        //
        e.preventDefault();
    });

    $("#name").change(function () {
        $(this).removeClass("errorForm");
    });

    $("#email").change(function () {
        $(this).removeClass("errorForm");
    });

    $("#message").change(function () {
        $(this).removeClass("errorForm");
    });
});