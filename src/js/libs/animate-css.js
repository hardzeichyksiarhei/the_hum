(function($) {

    // Waypoints 2.0.5

    $.fn.animated = function(inEffect, outEffect, offsetTop, offsetBottom) {

        return this.each(function () {
            $(this).css("opacity", "0").addClass("animated").waypoint(function(direction) {
                if (direction === "down") {
                    $(this.element).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
                } else {
                    $(this.element).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
                }
            }, {
                offset: offsetTop
            });

            $(this).css("opacity", "0").addClass("animated").waypoint(function(direction) {
                if (direction === "down") {
                    $(this.element).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
                } else {
                    $(this.element).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
                }
            }, {
                offset: offsetBottom
            });
        });

    };

})(jQuery);
