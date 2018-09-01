
/******************************************************************************
 *  Execution       :   1. default node         cmd> node helloString.js 
 * 
 *  Purpose         : code to print the string with the username 
 * 
 *  @description    
 * 
 *  @file           : helloString.js
 *  @overview       : hello module to print string .
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
function hello()
{
  read.question('Enter the input : ', function(name) {

    
    utility.hello(name);
  read.close();
  });
}
hello();