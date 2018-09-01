/******************************************************************************
 *  Execution       :   8. default node         cmd> node couponNumbers.js 
 * 
 *  Purpose         :code to generate distinct coupoun numbers
 * 
 *  @description    
 * 
 *  @file           : couponNumbers.js
 *  @overview       : couponnumbers module to print distinct coupon numbers between given values
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 27-08-2018
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
function coupon()
{

read.question('Enter minimum value of coupon number ', function(min)
 {
    read.question('Enter maximum coupon number to be generated', function(max)
    {
       utility.coupon(min,max);
             read.close();

        });

});
}
coupon();
