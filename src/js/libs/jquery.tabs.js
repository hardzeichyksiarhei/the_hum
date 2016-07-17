(function ($) {

    var defaults = {
        active_number: 0,
        startTabs: function () {},
        endTabs: function () {},
        clickStartTabs: function () {},
        clickEndTabs: function () {}
    };

    function Tabs(element, options) {

        this.config = $.extend({}, defaults, options);
        this.element = element;
        this.init();
    }

    Tabs.prototype.init = function () {

        var self = this;

        self.config.startTabs(self.element);

        var
            navTabs = this.element.find('ul.nav-tabs'),
            contentTabs = this.element.find('.tabs-content .tab-pane');

        navTabs.children('li').eq(this.config.active_number).addClass('active');

        contentTabs.not(contentTabs.eq(this.config.active_number)).hide();

        navTabs.on('click', 'li:not(.active)', function () {

            self.config.clickStartTabs(self.element);

            $(this).addClass('active').siblings().removeClass('active');
            contentTabs.hide().eq($(this).index()).fadeIn();

            self.config.clickEndTabs(self.element);
        });

        self.config.endTabs(self.element);

    };

    $.fn.tabs = function (options) {

        new Tabs(this.first(), options);

        return this.first();

    }
})(jQuery);