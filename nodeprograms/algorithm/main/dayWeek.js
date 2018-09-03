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
 ******************************************************************************/ var i;
 var month=process.argv[2];
 var day=process.argv[3];
 var year=process.argv[4];
 var utility=require('../utility/utility');

 if(isNaN(month,day,year))
 {
    console.log("please enter numeric values");

 }

 else{
    utility.dayWeek(month,day,year);


 }
 