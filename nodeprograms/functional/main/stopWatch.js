
/******************************************************************************
 *  Execution       :   13. default node         cmd> node stopWatch.js 
 * 
 *  Purpose         :  simulation of stop watch program
 * 
 *  @description    
 * 
 *  @file           : stopWatch.js
 *  @overview       : stopwatch module to simulate the stop watch
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-08-2018
 *
 ******************************************************************************///var prompt = require('prompt')
var readline = require('readline');
var utility=require('../utility/utility');

//
    var start1=0;
 var read = readline.createInterface(
   {input: process.stdin,
  output: process.stdout}
);
function stopWatch()
{
  read.question('Enter starttime: ',function(start){
          if(start==1){
                startTime = utility.getTime();
                 
   
       
          read.question('Enter stoptime: ',function(stop){

            if(stop==0)
            {
               var  stopTime=utility.getTime();
                utility.stopWatch(startTime,stopTime);
           
            read.close();}
          
});
          }
});
  
}
stopWatch();
