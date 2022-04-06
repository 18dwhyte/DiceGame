
var diceArr=[];
let ans = 0;
var player1Money = 0;
var player2Money = 0;
//Generates Random Dice
function rollDice(){

var one = 0;
var two = 0;
var three = 0 
var four = 0;
var five = 0;
var six = 0;


//Creates Dices
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = randomNumber1 + ".png"; //random   1.png - 6.png
var randomImageSource = "images/" + randomDiceImage; //images/1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//dice 3
var randomNumber3 = Math.floor(Math.random() * 6) + 1;
var randomImageSource3 = "images/" + randomNumber3 + ".png";
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

//dice 4
var randomNumber4 = Math.floor(Math.random() * 6) + 1;
var randomImageSource4 = "images/" + randomNumber4 + ".png";
document.querySelectorAll("img")[3].setAttribute("src", randomImageSource4);

//dice 5
var randomNumber5 = Math.floor(Math.random() * 6) + 1;
var randomImageSource5 = "images/" + randomNumber5 + ".png";
document.querySelectorAll("img")[4].setAttribute("src", randomImageSource5);

//dice 6
var randomNumber6 = Math.floor(Math.random() * 6) + 1;
var randomImageSource6 = "images/" + randomNumber6 + ".png";
document.querySelectorAll("img")[5].setAttribute("src", randomImageSource6);
diceArr = [randomNumber1,randomNumber2,randomNumber3,randomNumber4,randomNumber5,randomNumber6]

for(let i = 0; i < diceArr.length; i++){
    if(diceArr[i] == 1){one++;}
    if(diceArr[i] == 2){two++;}
    if(diceArr[i] == 3){three++;}
    if(diceArr[i] == 4){four++;}
    if(diceArr[i] == 5){five++;}
    if(diceArr[i] == 6){six++;}
}

if(one == 3){ans += 1000;}
if(one != 3){ans += 100 * one;}
if(five != 3){ans += 50 * five;}
if(five == 3){ans += 1000;}
if(two == 3){ans += 200;}
if(three == 3){ans += 300;}
if(four == 3){ans += 400;}
if(five == 3){ans += 500;}
if(six == 3){ans += 600;}

getPlayerNum(ans);

}

function diceClick(img){
    var i = img.getAttribute("data-number")
    img.classList.toggle("transparent");
}

function saveNum(){

var player = prompt("Who is the player. Insert 1 or 2");
if (player == 1){
    
    player1Money += ans;
    alert("Player one has " + player1Money + " points")
    ans = 0;
}
else if (player == 2){
    player2Money += ans;
    alert("Player two has " + player2Money + " points")
    ans = 0;
}
else{
    alert("invalid player");
}

if (player1Money >= 10000) {
    alert("Player 1 Wins!");
}
else if (player2Money >= 10000){
    alert("Player 2 Wins!");
}
document.getElementById('score').innerHTML = 0;
}

function getPlayerNum(ans){
    document.getElementById('score').innerHTML = ans;
}


function diceClick(){

}
