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
            } else {
                $("#nav-icon").removeClass('nav-down');
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
    }
    ;
    $(function () {
        $('[data-scroll-speed]').moveIt();
    });
});
