$(document).ready(function () {
    $("#contact-form").submit(function (e) {
        $(".errorForm").removeClass("errorForm");
        var send = true;
        if ($("#name").val() == "") {
            send = false;
            $("#name").addClass("errorForm");
            $('.send_error').show('fast');
        }
        if ($("#email").val() == "") {
            send = false;
            $("#email").addClass("errorForm");
            $('.send_error').show('fast');
        }
        else {
            var r = /^\w+@\w+\.\w{2,4}$/i;
            if (!r.test($("#email").val())) {
                send = false;
                $("#email").addClass("errorForm");
                $('.send_error').show('fast');
            }

        }
        if ($("#message").val() == "") {
            send = false;
            $("#message").addClass("errorForm");
            $('.send_error').show('fast');
        }
        
        if (send) {
            var name = $("#name").val();
            var email = $("#email").val();
            var message = $("#message").val();
            
            $.ajax({
                method: "POST",
                url: "send.php",
                data: {name: name, email: email, message: message},
                success: function (data) {
                    if (data == "") {
                        /*window.location.href = "index.html";//edit start page of site*/
                        $('.send_error').hide('fast');
                        $('.send_success').show('fast');
                    }
                }
            });
        }
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