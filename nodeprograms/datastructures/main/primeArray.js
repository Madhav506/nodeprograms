
/******************************************************************************
 *  Execution       :   9. default node         cmd> node twoDarray.js 
 * 
 *  Purpose         :code to print 2D array with elements
 * 
 *  @description    
 * 
 *  @file           : twoDarray.js
 *  @overview       : twoDarray module to print elements in a array
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-08-2018
 *
 ******************************************************************************/
/*var prompt = require('prompt-sync')();
var utility = require('../utility/2Dutility.js');
var re = /[a-zA-Z]/g;
var re2 = /[!@#$%^&*().<>+-/*"'`~]/g;
function prime() {
    var r1 = prompt(' Enter range1 ');
    var r2 = prompt(' Enter range2 ');
    if(r1.search(re) == -1 && r1.search(re2) == -1 && r1 >= 0 && r2 > 0 && r1 < 1001 && r2 < 1001) {
        
         r1 = parseInt(r1);
         r2 = parseInt(r2);
     utility.primeArray(r1,r2);

        }
    }
 prime();*/
 var readline = require('readline');
var utility=require('../utility/utilityPrime1.js');
var read = readline.createInterface(
{
    input: process.stdin,
  output: process.stdout

});
function primeArray()
{

read.question('Enter range1 : ', function(range1){
read.question('Enter range2 : ',function(range2){

    var reg = /[a-zA-Z]/g;
    var reg2 = /[!@#$%^&*().<>+-/*"'`~]/g;
if(range1.search(reg) == -1 && range1.search(reg2) == -1 && range1 >= 0 && range2 > 0 && range1 < 1001 && range2 < 1001)
     {

   range1 = parseInt(range1);
   range2 = parseInt(range2);
   utility.primeArray(range1,range2);
     }

 read.close();
});
});
}
primeArray();