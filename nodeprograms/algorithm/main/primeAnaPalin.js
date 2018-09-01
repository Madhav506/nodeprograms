/******************************************************************************
 *  Execution       :   2. default node         cmd> node primeAnaPal.js 
 * 
 *  Purpose         :  printing prime numbers that are anagram and palindrome
 * 
 *  @description    
 * 
 *  @file           : primeAnaPal.js
 *  @overview       : printing prime numbers that are anagram and palindrome
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 31-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/utility');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function primeAnaPal()
{
    read.question('Enter starting range to check palindrome and prime',function(max){
        read.question('Enter ending range to check palindrome and prime',function(min){

            utility.primeAnaPal(max,min);
        read.close();
    });
});
}
primeAnaPal();