
/******************************************************************************
 *  Execution       :   6. default node         cmd> node primeFactors.js 
 * 
 *  Purpose         :  code to print the prime factors of a number
 * 
 *  @description    
 * 
 *  @file           : primeFactors.js
 *  @overview       : prime module to print the prime factors of a number
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
function prime()
{

read.question('Enter the number: ', function(number) {
  utility.prime(number);
 read.close();
}
);
}
prime();