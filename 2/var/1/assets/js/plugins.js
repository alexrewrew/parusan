$(document).ready(function () {

    /* OWL CAROUSEL */
    $('#customers').owlCarousel({
        loop: true
        , margin: 10
        , nav: true
        , items: 5
        , navText: ["<img src='assets/img/left_arrow.png'>", "<img src='assets/img/right_arrow.png'>"]
        , responsive: {
            0: {
                items: 2,
                dots: true
            },
            768: {
                items: 4,
                dots: false
            }
            , 1024: {
                items: 4,
                dots: false
            }
            , 1280: {
                items: 5,
                dots: false
            }
        }
    });
    $('#modal_carousel').owlCarousel({
        loop: true,
        margin: 10,
        lazyLoad: true,
        nav: true,
        items: 1, navText: ["<img src='assets/img/left_arrow.png'>", "<img src='assets/img/right_arrow.png'>"]
    });

});
