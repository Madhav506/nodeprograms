/******************************************************************************
 *  Execution       :   2. default node         cmd> node primeNumber.js 
 * 
 *  Purpose         :  printing prime numbers between 1 and 1000
 * 
 *  @description    
 * 
 *  @file           : primeNumber.js
 *  @overview       : printing prime numbers between 1 and 1000
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 31-08-2018
 *
 ******************************************************************************/
/********************************************************************************
 * Algorithm:
 * read the range 0  and max between which you want to obtain prime numbers
 * intialize the variables flag with 0
 * if the number modulus 2 is 0 its not a prime number and flag increements
 * if not its flag value will be changed to 1 and will be printed as prime number
 *********************************************************************************/
var readline=require('readline');
var utility=require('../utility/utility');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function prime()
{
    var i;
    read.question('Enter a maximum range ',function(range){
            utility.prime(range);
        read.close();
    });
}
prime();