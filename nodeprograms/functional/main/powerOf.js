
/******************************************************************************
 *  Execution       :   4. default node         cmd> node powerOf.js 
 * 
 *  Purpose         : code to print the powers of 2 through command line arguments
 * 
 *  @description    
 * 
 *  @file           : powerOf.js
 *  @overview       : power module to print the powers of 2
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 25-08-2018
 *
 ******************************************************************************/

var limit =process.argv[2];//giving inputs through command line arguments
var utility=require('../utility/utility');
utility.power(limit);
