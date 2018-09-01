
/******************************************************************************
 *  Execution       :   11. default node         cmd> node findDistance.js 
 * 
 *  Purpose         :  code to measure distance between center and (x,y)
 * 
 *  @description    
 * 
 *  @file           : findDistance.js
 *  @overview       : distance module to measure distance between center and (x,y)
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-08-2018
 *
 ******************************************************************************/
//var limit =process.argv[2];
var x =process.argv[2];
var y=process.argv[3];

var utility=require('../utility/utility');
utility.distance(x,y);
//distance program
