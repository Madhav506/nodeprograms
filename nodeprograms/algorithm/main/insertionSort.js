
/******************************************************************************
 *  Execution       :   7. default node         cmd> insertionSortString.js 
 * 
 *  Purpose         :  searching for a word in a file with binary search
 * 
 *  @description    
 * 
 *  @file           : insertionSortString.js
 *  @overview       : seraching for a word in file and displaying where it is present i.e index 
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 3-08-2018
 *
 ******************************************************************************/
/*****************************************************************************
 * Algorithm:
 * takes the input elements from user
 * iterates a loop and stores the element whose left side is checked for correct position
 * checks whether the adjacent element is greater are not
 * if it is greater it would move a position forward
 * and moves the elements to the correct position 
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility=require('../utility/utility');
function insertionSort()
{
   var size=prompt("enter size of an array: ");
  /* var arr=new Array(num);
   for(i=0;i<num;i++)
   {
       arr[i]=prompt("enter the element");
   }
   */
   utility.insertionSortString(size);
   
}
insertionSort();