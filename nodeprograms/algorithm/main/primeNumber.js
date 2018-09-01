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
    read.question('Enter a minimum range ',function(range){
        read.question('Enter max range',function(range1){
            utility.prime(range,range1);
        read.close();
    });
});
}
prime();