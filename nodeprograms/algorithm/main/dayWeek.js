/******************************************************************************
 *  Execution       :   2. default node         cmd> node dayWeek.js 
 * 
 *  Purpose         :  printing prime numbers between 1 and 1000
 * 
 *  @description    
 * 
 *  @file           : dayWeek.js
 *  @overview       : printing dayof the week in ayear
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
function dayWeek()
{
    var i;
    var month,day,year;
    read.question('Enter a month ',function(month){
        read.question('Enter day',function(day){
            read.question('Enter a year ',function(year){
                if(isNaN(month,day,year))
                {
                    console.log("please enter numeric value");

                }
                else{
            utility.dayWeek(month,day,year);
                }
        read.close();
            });
    });
});
}
dayWeek();