     var card1=  document.getElementById("card-1")
     var card2= document.getElementById("card-2")
     var card3= document.getElementById("card-3")
     var reset=document.getElementById("my button").reset();


function flipCard(param){
    var randomNumber = Math.ceil(Math.random() * 3);

    if (param === 1 && randomNumber === 1){
        card1.src="image/download.png"
        alert("you are win")
    }else if(param === 1 && randomNumber === 2){
        card2.src="image/istockphoto-1440592316-612x612.jpg"
        alert("you are win")
    }else if(param === 1 && randomNumber === 3 ){
        card3.src="image/download.jpeg"
        alert("your are loss")
    }
}
function resetcard1(){
    flipCard()
    card1.forEach(card => {
        card.classList.remove('flipped'); // Assuming 'flipped' is the class added when a card is flipped
        // Reset any other state if necessary
    });
      cards.forEach(card => {
        card.classList.remove('flipped'); // Assuming 'flipped' is the class added when a card is flipped
        // Reset any other state if necessary
    });

}








