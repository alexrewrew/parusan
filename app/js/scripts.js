$(document).ready(function () {

    /*$(window).on('load resize', function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $("#nav-icon").addClass('nav-down');
                $(".arrow_up").fadeIn('slow');
            } else {
                $("#nav-icon").removeClass('nav-down');
                $(".arrow_up").fadeOut('fast');
            }
        });
    });*/
    //menu
    $('.menu').click(function () {
        $('#nav-icon').toggleClass('open');
        $('.main_menu').toggleClass('opened');
    });


    $('.menu_list li a').click(function () {
        $('#nav-icon').removeClass('open');
        $('.main_menu').removeClass('opened');

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

    $(".modalTarget").click(function () {
        var gid = $(this).parent().attr("id");
        if (gid != "") {
            // ID of the Google Spreadsheet
            var spreadsheetID = "1F9VFCkJ3x0BQ3_ZCRpVtWlQLMM3vGZjnmJpBxSPqDGU";

            // Make sure it is public or set to Anyone with link can view
            var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

            $.getJSON(url, function (data) {

                var options = "";

                var entry = data.feed.entry;

                if (entry.length > 0) {
                    var nameVar = "gsx$link" + gid;

                    $(".modal-button").attr("href", entry[0][nameVar]['$t']);

                    $(entry).each(function () {
                        if (this[nameVar]['$t'] != "") {
                            options += '<option value=' + this[nameVar]['$t'] + '>' + this.gsx$name.$t + '</option>';
                        }
                    });
                } else {
                    options = "Продукту немає в наявності";
                }

                $("#modalSelect").html(options);

                setTimeout(function () {
                    $("#modal-show").css("opacity", "1");
                    $("#modal-preloader").css("opacity", "0");
                },500);

                $("#modalSelect").chosen({disable_search: true, width: "100%", scroll_to_highlighted: false});
            });
        } else {
            alert("Error sending form. Try again later");
        }
    });

    $("#modalSelect").chosen({disable_search: true, width: "100%", scroll_to_highlighted: false});
    $("#modalSelect").change(function () {
        var val = $(this).val();
        $(".modal-button").attr("href", val);
    });

    $('#myModal').on('hidden.bs.modal', function () {
        $("#modal-show").css("opacity", "0");
        $("#modal-preloader").css("opacity", "1");
        $("#modalSelect").html("");
        $("#modalSelect").chosen("destroy");
    });

});
