
/******************************************************************************
 *  Execution       :   3. default node         cmd> node leapYear.js 
 * 
 *  Purpose         :  CODE TO CHECK WHETHER THE GIVEN YEAR IS LEAP YEAR OR NOT
 * 
 *  @description    
 * 
 *  @file           : leapYear.js
 *  @overview       : leapyear module to check whether given year is leap year or not
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
function leapyear()
{

read.question('Enter a 4 digit  year ', function(year)
 {
   if(isNaN(year))
  {
    console.log("please enter a valid numeric year");
  }
  else
  {
   utility.leapyear(year);
  }
  read.close();
  
}

);

}
leapyear();