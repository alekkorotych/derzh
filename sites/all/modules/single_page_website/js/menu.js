(function($){
  $(document).ready(function(){
    var menu_element = Drupal.settings.single_page.menu_element;
    var basePath = Drupal.settings.basePath;
    var pathPrefix = Drupal.settings.pathPrefix;
    $(menu_element+" a").each(function(index) {
      var anchor = this.href.replace(/http(s)?:\/\/[^\\/]+/g, '').replace(basePath, '');
      this.href = basePath + pathPrefix + "#" + "spw-" + anchor.replace("/","-");
    });
  });
})(jQuery);
