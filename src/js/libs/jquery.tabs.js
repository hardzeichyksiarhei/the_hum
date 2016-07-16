(function ($) {
    $.fn.tabs = function (options) {

        var settings = $.extend({
            'active_number': 0
        }, options);

        var
            navTabs = $(this).find('ul.nav-tabs'),
            contentTabs = $(this).find('.tabs-content .tab-pane');

        navTabs.children('li').eq(settings.active_number).addClass('active');

        contentTabs.not(contentTabs.eq(settings.active_number)).hide();

        navTabs.on('click', 'li:not(.active)', function () {

            $(this).addClass('active').siblings().removeClass('active');
            contentTabs.hide().eq($(this).index()).fadeIn();
        });
    }
})(jQuery);