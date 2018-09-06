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

     if(day>=1 && day<32 && month>=1 && month<13)
     {   
         if(year%4==0 && year%100!=0 || year%400==0)
         {
             utility.dayWeek(month,day,year);
         }
             else if(day>=29 && month==2)
             {
                 console.log("invalid,please enter valid input");
             }
                 else if((month==4 || month==6 || month==9 || month==11) && day>=31)
                 {if(day>=1 && day<32 && month>=1 && month<13)
                     {   
                         if(year%4==0 && year%100!=0 || year%400==0)
                         {
                             utility.dayWeek(month,day,year);
                         }
                             else if(day==29 && month==2)
                             {
                                 console.log("invalid,please enter valid input");
                             }
                                 else if((month==4 || month==6 || month==9 || month==11) && day>=31)
                                 {
                                     console.log("invalid,please enter valid input");
                                 }
                         else
                             utility.dayWeek(month,day,year);
                     }    
                     else
                     {
                         console.log("invalid,please enter valid input");
                     }        
                     console.log("invalid,please enter valid input");
                 }
         else
             utility.dayWeek(month,day,year);
     }    
     else
     {
         console.log("invalid,please enter valid input");
     }        
             
