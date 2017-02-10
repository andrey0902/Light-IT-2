
app.directive('closeEditing',[function(){var KEYS={ESC:27}
return{scope:{isEditing:'='},link:function(scope,element,attributes){$('body').on('keyup',function(e){if(_.isEqual(e.keyCode,KEYS.ESC)){scope.isEditing=false;scope.$apply();}});$('body').on('click',function(e){if(e.target.tagName=="BODY"||e.target.nodeName=="DIV"){scope.isEditing=false;scope.$apply();}});}}}]);