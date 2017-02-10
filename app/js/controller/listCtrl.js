
app.controller('listCtrl',['dataTrello','cardFactory',function(dataTrello,cardFactory){this.isCreateCard=false;this.className='glyphicon-ok-sign';this.removeList=function(list){dataTrello.removeList(list)
cardFactory.removeCardsFromList(list)}
this.getCard=function(item){return cardFactory.serchCard(item);}
this.createCard=function(item){cardFactory.createNewCard(item,this.cardDescription,this.className)
this.cardDescription='';this.isCreateCard=false;}
this.showForm=function(){this.isCreateCard=!this.isCreateCard;}}]);