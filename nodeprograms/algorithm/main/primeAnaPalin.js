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
/*****************************************************************************
 * Algorithm
 * take user input for range
 * print the prime numbers between that range
 * print the palindromes in that range
 * print the anagrams in that range
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
    read.question('Enter the range ',function(max){
            utility.primeAnaPal(max);
        read.close();
    });
}
primeAnaPal();