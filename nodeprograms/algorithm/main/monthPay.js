

/******************************************************************************
 *  Execution       :   16. default node         cmd> node monthlyPay.js 
 * 
 *  Purpose         : code to print monthly payment

 * 
 *  @description    
 * 
 *  @file           : monthlyPay.js
 *  @overview       : windchill module to print the formula given through command line arguments
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-08-2018
 *
 ******************************************************************************///var limit =process.argv[2];
 var p=process.argv[2];
 var y=process.argv[3];
 var r=process.argv[4];
 var utility=require('../utility/utility');


 if(isNaN(p,y,r))
 {
     console.log("please enter numeric values");
 }
 else{
 utility.monthPay(p,y,r);
 }
 