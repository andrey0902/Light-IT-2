
app.factory('cardFactory',['$resource',function($resource){var service={},resourse,cardItems=[],countId;resourse=$resource('',{},{getImg:{method:"GET",url:"./img.json",isArray:true,format:"json"}});function nameImg(){return resourse.getImg()}
function setLocalStorage(key,data){localStorage.setItem(key,JSON.stringify(data));}
!function(){if(localStorage.length){if(angular.isArray(JSON.parse(localStorage.getItem("cards")))){return cardItems=JSON.parse(localStorage.getItem("cards"))}}}();function serchCard(list){return _.filter(cardItems,{list_id:list.list_id});}
function createNewCard(card,cardDescription,iconName){cardItems.push({id:'card_'+cardItems.length,description:cardDescription,list_id:card.list_id,iconCardName:iconName});setLocalStorage("cards",cardItems);}
function deleteCard(card){_.pull(cardItems,card);setLocalStorage("cards",cardItems);}
function removeCardsFromList(list){var test=_.filter(cardItems,{list_id:list.list_id});for(let i=0;i<test.length;i++){_.pull(cardItems,test[i])}
setLocalStorage("cards",cardItems)}
function updateCard(updetingCard,iconClass){var card=_.find(cardItems,{id:updetingCard.id});card.description=updetingCard.description;card.list_id=updetingCard.list_id;card.iconCardName=iconClass;setLocalStorage("cards",cardItems)}
return service={serchCard,createNewCard,deleteCard,updateCard,nameImg,removeCardsFromList}}]);