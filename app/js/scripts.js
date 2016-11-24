$(document).ready(function(){
    //menu
    $('#nav-icon').click(function(){
        $('#nav-icon').toggleClass('open');
        $('.main_menu').toggleClass('opened');
    });

    $(window).on('load resize', function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $("#nav-icon").addClass('nav-down');
                /*$("#up").css('display','block');*/
            } else {
                $("#nav-icon").removeClass('nav-down');
               /* $("#up").css('display','none');*/
            }
            /*if ($(this).scrollTop() > 650) {
                $("#burger2").attr("src", "assets/img/icons/Burger_mob2.svg");
            } else {
                $("#burger2").attr("src", "assets/img/icons/Burger_mob1.svg");
            }*/
        });
    });

    //slide anchors
    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});
