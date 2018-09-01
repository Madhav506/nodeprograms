
/******************************************************************************
 *  Execution       :   15. default node         cmd> node quadraticRoots.js 
 * 
 *  Purpose         :   code to print the roots of a quadratic equation
 * 
 *  @description    
 * 
 *  @file           : quadraticRoots.js
 *  @overview       : quadratic module to print the roots of a equation
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-08-2018
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
function quadratic()
{

read.question('Enter the  value of a : ', function(a)
 {
    read.question('Enter the value of b : ', function(b)
    {
        read.question('Enter the value of c :  ', function(c)
        {

             utility.quadratic(a,b,c);
             read.close();

        });

});

});
}
quadratic();
