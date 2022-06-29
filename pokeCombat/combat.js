const { readlink } = require('fs');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

console.clear
var inCombat =true;
var playerTurn=true;


class pokemon{
    name="";
    attacks=[];
    hp=0;
    level=0
    type = ""

    attackPower = 0;
    defense=0;

}

class move{
    attackMultiplier = 1;
    attackType=0;
}


function playerAttack(){

}

while(inCombat ===true)
{
    if (playerTurn ===true){
        const prompt = require("prompt-sync")();
        const input = prompt("Say literally anything:... ");

        
        
        console.log(`You said '${input}, like an idiot.`)
        playerTurn = false;
    }
    else if(playerTurn===false){
        console.log("The enemy attacks you");
        
        playerTurn=true;
 

}}