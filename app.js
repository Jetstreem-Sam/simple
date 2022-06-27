$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffset = $(window).scrollTop();

        /*header_fixed*/
    checkScroll();

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();
        if (scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*smooth_scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this), 
            blocktId = $this.data('scroll'),
            blockOffset = $(blocktId).offset().top;

        $("#nav a").removeClass("Active");
        $this.addClass("active");

        $("html, body").animate ({
            scrollTop: blockOffset
        }, 500);
    });
    /*nav_toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

    /*collpase*/
    $("[data-collapse]").on("click", function(event) {
            event.preventDefault();
            
            var $this = $(this), 
            blocktId = $this.data('collapse');

           $this.toggleClass("active");

    });

});