
/******************************************************************************
 *  Execution       :   7. default node         cmd> node playGambler.js 
 * 
 *  Purpose         : code to print the number of wins and percentage of wins in gambler game
 * 
 *  @description    
 * 
 *  @file           : playGambler.js
 *  @overview       : gambler module to print number of times you win
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 25-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility=require('../utility/utility');


var read = readline.createInterface(
{
  input: process.stdin,
  output: process.stdout
}
);
function gambler()
{

read.question('Enter stake amount : ', function(stake)
 {
    read.question('Enter goal : ', function(goal)
    {
        read.question('Enter  number of times you wanted to play : ', function(numberoftimes)
        {

             utility.gambler(stake,goal,numberoftimes);
             read.close();

        });

});

});
}
gambler();
