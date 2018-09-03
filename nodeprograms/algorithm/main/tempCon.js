/******************************************************************************
 *  Execution       :   2. default node         cmd> node tempCon.js 
 * 
 *  Purpose         :  printing prime numbers between 1 and 1000
 * 
 *  @description    
 * 
 *  @file           : tempCon.js
 *  @overview       : printing temperature in celsius and fahrenheit
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
function tempCon()
{
    read.question('Enter temperature in celsius ',function(cel){
        read.question('Enter temperature in fahrenheit',function(fa){
                if(isNaN(cel,fa))
                {
                    console.log("please enter numeric value");

                }
                else{
            utility.tempCon(cel,fa);
                }
        read.close();
            });
    });
}
tempCon();