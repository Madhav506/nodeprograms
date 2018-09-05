/******************************************************************************
 *  Execution       :   11. default node         cmd> node dayWeek.js 
 * 
 *  Purpose         :  printing the day of week on which the given date falls
 * 
 *  @description    
 * 
 *  @file           : dayWeek.js
 *  @overview       : printing dayof the week in a given year and months
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 31-08-2018
 *
 ******************************************************************************/ 
 var i;
 var month=process.argv[2];
 var day=process.argv[3];
 var year=process.argv[4];
 var utility=require('../utility/utility');
 var m=parseInt(month);
     var d=parseInt(day);
     var y=parseInt(year);

 if(isNaN(month,day,year))
 {
    console.log("please enter numeric values");

 }
 if(day>31 || day<1)
 {
     console.log("please enter valid date ");
     return;
 }
 if(month>12 || month<1)
 {
     console.log("please enter valid month");
     return;
 }
 if(year>10000 || year<100)
 {
     console.log("please enter valid year");
     return;
 }

 else{
     
    utility.dayWeek(m,d,y);
 }
 