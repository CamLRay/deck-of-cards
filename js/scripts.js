$(document).ready(function(){
  const suits = ["Clubs","Diamonds","Hearts","Spades"]
  const ranks = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      $("#deck").append("<li>"+rank + " of " + suit+"</li>")
    });
  });
});