// http://docs.ckeditor.com/#!/api/CKEDITOR.config
 
// Uses 2 spaces instead of a tab for indentation.
CKEDITOR.config.dataIndentationChars = ' ';
CKEDITOR.config.tabSpaces = 2;
 
// Sets custom colors
CKEDITOR.config.colorButton_colors = "000,fff,544741,f16464,fdb415,ffe55e,d5e259,8bbfc6";
 
// Restricts font selection.
CKEDITOR.config.font_names = "'Helvetica Neue', Helvetica, Arial, sans-serif;ge-sans, 'Helvetica Neue', Helvetica, Arial, sans-serif;ge-serif,Georgia,serif;";
 
// Styles the table plugin.
CKEDITOR.on('dialogDefinition', function(ev) {
  var dialogName = ev.data.name;
  var dialogDefinition = ev.data.definition;
 
  if (dialogName == 'table') {
    var info = dialogDefinition.getContents('info');
    info.get('txtWidth')[ 'default' ] = '100%';
    info.get('txtBorder')[ 'default' ] = '0';
    info.get('txtCellSpace')[ 'default' ] = '0';
    info.get('txtCellPad')[ 'default' ] = '0';
  }
});
 
// Adds a dark bootstrap button style.
CKEDITOR.stylesSet.add('default', [
  {
    name: 'Button Dark',
    element: 'a',
    attributes: {
      'class': 'btn btn-inverse'
    }
  }
]);
 
 
// Resizes editor for specific fields when initially loaded.
(function() {
  var instanceNames = {
    'edit-field-my-field-und-0-value': 200, 
    'edit-field-my-other-field-und-0-value': 200, 
    'edit-body-und-0-value': 350
  };
 
  CKEDITOR.on('instanceCreated', function(e) {
    var instance = e.editor;
 
    if (instanceNames[instance.name] !== "undefined") {
      instance.on('instanceReady', function(e) {
        var height = instanceNames[instance.name];
        e.editor.resize('100%', height);
      });
    }
  });
})();