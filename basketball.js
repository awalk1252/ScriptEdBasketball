function  promptForPlayerName(playerone){
    playerone = prompt ("enter your name");
    if (playerone.length> 15)
    alert("Wow that's a long name!");
}
    return playerone;

function tryTwoPointShot(){
    var number = Math.random();
    var number2 = Math.random();
    if (number>0.2 && number2>0.2) {return true} else {return false}
   
}
  function tryThreePointShot(){
      var number = Math.random();
      var number2 = Math.random();
      if (number<=0.2 || number2>=0.8) {return true} else {return false}
     
}


function getShotString(){
    

}

function updateScore(){
    
}

function isEndOfGame(){
    
}