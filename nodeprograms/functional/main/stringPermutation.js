
/******************************************************************************
 *  Execution       :   12. default node         cmd> node stringPermutation.js 
 * 
 *  Purpose         :  code to print the String permutations
 * 
 *  @description    
 * 
 *  @file           : stringPermutation.js
 *  @overview       : permute module to get the permutations of a string
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-08-2018
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
function stringPermutation()
{

read.question('Enter a string: ', function(string) {
    var strArrray=string.split('');//split the string in to characters
    if(isNaN(string))
    {
      utility.permute(strArrray,0,strArrray.length-1);
     }
     else{
       console.log("please enter string");
     }
     read.close();

    }
  
);
}
stringPermutation();