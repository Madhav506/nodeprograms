
/******************************************************************************
 *  Execution       :   2. default node         cmd> node flipCoin.js 
 * 
 *  Purpose         :  code to calculate the percentage of heads and percentage of tails
 * 
 *  @description    
 * 
 *  @file           : flipCoin.js
 *  @overview       : flipcoin module to print the heads and tails percentage
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
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
function flipcoin()
{

read.question('Enter number of times coin to be tossed: ', function(numberofflips)
 {
  utility.flipcoin(numberofflips);
 read.close();
}
);
}
flipcoin();