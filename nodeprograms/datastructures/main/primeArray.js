
/******************************************************************************
 *  Execution       :   9. default node         cmd> node twoDarray.js 
 * 
 *  Purpose         :code to print 2D array with elements
 * 
 *  @description    
 * 
 *  @file           : twoDarray.js
 *  @overview       : twoDarray module to print elements in a array
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-08-2018
 *
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility=require('../utility/utility');
function array()
{
    var rows= prompt("Enter number of rows : ");
    utility.primeArray(rows);
}
array();