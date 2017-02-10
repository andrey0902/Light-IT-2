
app.controller('mainCtrl',['dataTrello',function(dataTrello){var self=this;this.lists=dataTrello.getData();this.colors=dataTrello.getColors();this.addList=function(){dataTrello.addList(this.name,this.selected)
this.lists=dataTrello.getData();this.name='';}
this.colors.$promise.then(function(respons){self.selected=respons[0];});this.showMenu=function(){$('.create-list').toggleClass('visibel')}}]);