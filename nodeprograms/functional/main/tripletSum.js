
/******************************************************************************
 *  Execution       :   10. default node         cmd> node tripletsSum.js 
 * 
 *  Purpose         : sum of three integers zero print those triplets

 * 
 *  @description    
 * 
 *  @file           : tripletsSum.js
 *  @overview       : triplets module to print distinct triplets and their sum equals zero
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 25-08-2018
 *
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility=require('../utility/utility');
function triplets()
{
    var rows= prompt("Enter number of rows : ");
    utility.triplets(rows);
}
triplets();