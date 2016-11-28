$(document).ready(function () {
    //menu
    $('.menu').click(function () {
        $('#nav-icon').toggleClass('open');
        $('.main_menu').toggleClass('opened');
    });


    $('.menu_list li a').click(function () {
        $('#nav-icon').removeClass('open');
        $('.main_menu').removeClass('opened');

    });

    $(window).on('load resize', function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $("#nav-icon").addClass('nav-down');
                $(".arrow_up").fadeIn('slow');
            } else {
                $("#nav-icon").removeClass('nav-down');
                $(".arrow_up").fadeOut('fast');
            }
        });
    });

    $(document).mouseup(function (e) {
        var div = $(".opened");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $('#nav-icon').removeClass('open');
            $('.main_menu').removeClass('opened');
        }
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
    // parallax
    if ($(window).width() > '1200') {

        $.fn.moveIt = function () {
            var $window = $(window);
            var instances = [];
            $(this).each(function () {
                instances.push(new moveItItem($(this)));
            });
            window.onscroll = function () {
                var scrollTop = $window.scrollTop();
                instances.forEach(function (inst) {
                    inst.update(scrollTop);
                });
            }
        }
        var moveItItem = function (el) {
            this.el = $(el);
            this.speed = parseInt(this.el.attr('data-scroll-speed'));
        };
        moveItItem.prototype.update = function (scrollTop) {
            var pos = scrollTop / this.speed;
            this.el.css('transform', 'translateY(' + -pos + 'px)');
        };
    };
    $(function () {
        $('[data-scroll-speed]').moveIt();
    });

    // accordion
    $('.panel-title > a').click(function () {
        $('.panel-title > a').removeClass('active_pan');
        $(this).addClass('active_pan');
        /*$('.accordion_angle').attr('src', '../img/icons/angle-down3.svg');*/
    });

    //plus minus
    $('.minus1').click(function () {
        var $input = $('#pm1');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus1').click(function () {
        var $input = $('#pm1');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //plus minus
    $('.minus2').click(function () {
        var $input = $('#pm2');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus2').click(function () {
        var $input = $('#pm2');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //calculate
    /*$('#pm1, #pm2').change(function () {
        var pm1 = $('#pm1').val();
        var pm2 = $('#pm2').val();
        var count;
        count = pm1 + pm2;
        console.log(count);
        $('#count').text(count);
    });*/
});
