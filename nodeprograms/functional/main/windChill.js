

/******************************************************************************
 *  Execution       :   16. default node         cmd> node windChill.js 
 * 
 *  Purpose         : code to print windchill temperature

 * 
 *  @description    
 * 
 *  @file           : windChill.js
 *  @overview       : windchill module to print the formula given through command line arguments
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-08-2018
 *
 ******************************************************************************///var limit =process.argv[2];
var t =process.argv[2];
var v=process.argv[3];

var utility=require('../utility/utility');
utility.windchill(t,v);
