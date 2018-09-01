
    /******************************************************************************
 *  Execution       :   5. default node         cmd> node harmonicNumber.js 
 * 
 *  Purpose         :  code to print the harmonic value of nth number
 * 
 *  @description    
 * 
 *  @file           : harmonicNUmber.js
 *  @overview       : harmonic module to print the nth value of given term
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
function harmonic()
{

read.question('Enter harmonic value  to find: ', function(term) {
  utility.harmonic(term);
 read.close();
}
);
}
harmonic();