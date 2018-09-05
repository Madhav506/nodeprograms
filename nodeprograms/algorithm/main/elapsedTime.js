/******************************************************************************
 *  Execution       :   4. default node         cmd> node elapsedTime.js 
 * 
 *  Purpose         :  printing elapsed time based on performance of the methods
 * 
 *  @description    
 * 
 *  @file           : elapsedTime.js
 *  @overview       : printing the elapsed time based on performances in descending order
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 1-09-2018
 *
 ******************************************************************************/
/******************************************************************************
 * Algorithm:
 * writing methods of binarysearch, insertion sort, bubblesort for integers and strings 
 * calling those methods and calculating the elapsed time
 * elapsed time calculated using stopwatch that is start time - stop time
 * print the elapsed time in descending order
 ******************************************************************************/
var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js');
function elapsedTime()
{
    var size = prompt('enter the number of size ');
    

    start = utility.getTime();
    utility.binarySearchNum(size);
    stop=utility.getTime();
    res1=utility.getElapsedTime(start,stop);
    console.log("the Elapsed time of Binarysearch for integers is " +(res1/1000)+ " millisecs");

    start = utility.getTime();
    utility.binarySearchString(size);
    stop=utility.getTime();
    res2=utility.getElapsedTime(start,stop);
    console.log(" the Elapsed time of Binarysearch for Strings is " +(res2/1000)+ " millisecs");


    start = utility.getTime();
    utility.insertionSortNum(size);
    stop=utility.getTime();
    res3=utility.getElapsedTime(start,stop);
    console.log("the Elapsed time of InsertionSort for integers is  " +(res3/1000)+ "millisecs");

    start = utility.getTime();
    utility.insertionSortString(size);
    stop=utility.getTime();
    res4=utility.getElapsedTime(start,stop);
    console.log("the Elapsed time of InsertionSort for Strings is " +(res4/1000)+ " millisecs");


    start = utility.getTime();
    utility.bubbleSortNum(size);
    stop=utility.getTime();
    res5=utility.getElapsedTime(start,stop);
    console.log("the Elapsed time of BubbleSort for integers is " +(res5/1000)+ " millisecs");

    start = utility.getTime();
    utility.bubbleSortString(size);
    stop=utility.getTime();
    res6=utility.getElapsedTime(start,stop);
    console.log("                ");
    console.log("the Elapsed time of BubbleSort for Strings is : " +(res6/1000)+ " millisecs");
    

    var array=[(res1/1000),(res2/1000),(res3/1000),(res4/1000),(res5/1000),(res6/1000)];
    
    array=array.sort(function(a,b){return b-a;});
    console.log(array);
}
elapsedTime();