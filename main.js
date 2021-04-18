document.querySelector(".rollDice").addEventListener("click", rollDice);
function rollDice() {
  //create a var that is dice 1-6 for first dice
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  //var that is dice image 1-6
  var imagesDice = "dice" + randomNumber1 + ".png";
  //var that is the source of images
  var srcImages = "images/" + imagesDice;


  //create same thing for second dice 
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  // //var that is dice image 1-6
  var imagesDice2 = "dice" + randomNumber2 + ".png";
  // //var that is the source of images
  var srcImages2 = "images/" + imagesDice2;

  //create a var by selecting the first dice in two dices
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", srcImages);

  //create a var by selecting the 2nd dice in two dices
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", srcImages2);

  //create innerhtml to see which player is the winner,use if statement: if player 1 is > than 2
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  }

  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  }

  else {
    document.querySelector("h1").innerHTML = "Tie";
  }

  

}



