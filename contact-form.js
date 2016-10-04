$(document).ready(function () {
    $("#contact-form").submit(function (e) {
        $(".errorForm").removeClass("errorForm");
        var send = true;
        if ($("#name").val() == "") {
            send = false;
            $("#name").addClass("errorForm");
        }
        if ($("#email").val() == "") {
            send = false;
            $("#email").addClass("errorForm");
        }
        else {
            var r = /^\w+@\w+\.\w{2,4}$/i;
            if (!r.test($("#email").val())) {
                send = false;
                $("#email").addClass("errorForm");
            }

        }
        if ($("#message").val() == "") {
            send = false;
            $("#message").addClass("errorForm");
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
                        window.location.href = "http://parusan/";//edit start page of site
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