

/******************************************************************************
 *  Execution       :   5. default node         cmd> node findNumber.js 
 * 
 *  Purpose         : code to print find the number

 * 
 *  @description    
 * 
 *  @file           : findNumber.js
 *  @overview       : find the number that is secretly known to user and asking them some questions and print the secret number
 *   
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 3-08-2018
 *
 ******************************************************************************///var limit =process.argv[2];
 var utility=require('../utility/utility');

 var i=process.argv[2];
 var a=0;
 var range=parseInt(Math.pow(2,i));
 var secret =  utility.findNumber(a,range);


 