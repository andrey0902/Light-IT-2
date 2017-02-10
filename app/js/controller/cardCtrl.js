
app.controller('cardCtrl',['cardFactory',function(cardFactory){var self=this;this.editingCard=null;this.isEditing=false;this.className='glyphicon-ok-sign';cardFactory.nameImg().$promise.then(function(response){self.nameImgs=response;});this.deleteCard=function(itemCard){cardFactory.deleteCard(itemCard)}
this.editCard=function(card){this.editingCard=angular.copy(card);this.isEditing=true;}
this.updateCard=function(){cardFactory.updateCard(this.editingCard,this.className)
this.editingCard=null;this.isEditing=false;}}]);