/******************************************************************************
 *  Execution       :   2. default node         cmd> bubbleSortNum.js 
 * 
 *  Purpose         :  Sorting the elements in to correct order using bubble sort technique
 * 
 *  @description    
 * 
 *  @file           : bubbleSortNum.js
 *  @overview       : sorting elements with the help of bubble sort technique
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 4-08-2018
 *
 ******************************************************************************/
/*****************************************************************************
 * Algorithm:
 * takes the input elements from user
 * iterate the loops
 * compare the pairs of adjacent elements and swap the elements if they are in wrong position
 * if not no need of swapping the elements
 ******************************************************************************/

var prompt = require('prompt-sync')();
var utility=require('../utility/utility');
function bubbleSort()
{
   var num=prompt("enter size of an array: ");
   var arr=new Array(num);
   for(i=0;i<num;i++)
   {
       arr[i]=prompt("enter the element");
   }
   utility.bubbleSortNum(num);
   
}
bubbleSort();