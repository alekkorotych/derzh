/**
 * On scroll, set active menu item.
 */
(function ($) {
  Drupal.behaviors.Scrollspy = {
    attach: function (context, settings) {
      // Set first menu item active on page load.
      $(Drupal.settings.singlePage.menuClass + ' li:nth-child(1) a').addClass('active');

      $('.single-page-wrapper').each(function (i) {
        var position = $(this).position();
        $(this).scrollspy({
          min: position.top,
          max: position.top + $(this).height(),
          onEnter: function (element, position) {
            var id = element.id;
            $(Drupal.settings.singlePage.menuClass + ' li a[data-active-item="' + id + '"]').addClass('active');
            // Set hash.
            if (Drupal.settings.singlePage.updateHash != 0) {
              window.location.hash = id;
            }
          },
          onLeave: function (element, position) {
            var id = element.id;
            $(Drupal.settings.singlePage.menuClass + ' li a[data-active-item="' + id + '"]').removeClass('active');
          }
        });
      });
    }
  };
})(jQuery);