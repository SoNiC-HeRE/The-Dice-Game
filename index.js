var randomnumber1 = Math.floor(Math.random()*6);
var randomnumber2 = Math.floor(Math.random()*6);

if(randomnumber1==0){
    document.getElementById("imgone").src="images/dice1.png";
}
else if(randomnumber1==1){
    document.getElementById("imgone").src="images/dice2.png";
}
else if(randomnumber1==2){
    document.getElementById("imgone").src="images/dice3.png";
}
else if(randomnumber1==3){
    document.getElementById("imgone").src="images/dice4.png";
}
else if(randomnumber1==4){
    document.getElementById("imgone").src="images/dice5.png";
}
else if(randomnumber1==5){
    document.getElementById("imgone").src="images/dice6.png";
}

if(randomnumber2==0){
    document.getElementById("imgtwo").src="images/dice1.png";
}
else if(randomnumber2==1){
    document.getElementById("imgtwo").src="images/dice2.png";
}
else if(randomnumber2==2){
    document.getElementById("imgtwo").src="images/dice3.png";
}
else if(randomnumber2==3){
    document.getElementById("imgtwo").src="images/dice4.png";
}
else if(randomnumber2==4){
    document.getElementById("imgtwo").src="images/dice5.png";
}
else if(randomnumber2==5){
    document.getElementById("imgtwo").src="images/dice6.png";
}

if(randomnumber1>randomnumber2){
    document.getElementById("title").innerHTML="Player 1 Wins! 🚩";
}
else if(randomnumber1==randomnumber2){
    document.getElementById("title").innerHTML="Draw";
}
else{
    document.getElementById("title").innerHTML="Player 2 Wins! 🚩";
}
