(function ($) {
    $.fn.tabs = function (options) {

        var settings = $.extend({
            'active_number': 0,
            'speedFade': 0
        }, options);

        var
            navTabs = $(this).find('ul.nav-tabs'),
            contentTabs = $(this).find('.tabs-content');

        navTabs.children('li').eq(settings.active_number).addClass('active');

        contentTabs.find('.tab-pane').not(contentTabs.find('.tab-pane').eq(settings.active_number)).hide();

        navTabs.on('click', 'li:not(.active)', function () {
            var
                old_active = $(this).siblings('.active'),
                new_active = $(this);

            new_active.addClass('active').siblings().removeClass('active');
            contentTabs.find('.tab-pane').eq(old_active.index()).fadeOut(settings.speedFade, function () {
                contentTabs.find('.tab-pane').eq(new_active.index()).fadeIn(settings.speedFade);
            });


        });
    }
})(jQuery);