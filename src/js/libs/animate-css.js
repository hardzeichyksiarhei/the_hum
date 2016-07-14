(function($) {

    // Waypoints 2.0.5

    $.fn.animated = function(inEffect, outEffect, offsetTop, offsetBottom) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            } else {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            }
        }, {
            offset: offsetTop
        }).waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            } else {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            }
        }, {
            offset: offsetBottom
        });
    };
})(jQuery);
