
/******************************************************************************
 *  Execution       :   9. default node         cmd> mergeSort.js 
 * 
 *  Purpose         :  Sorting the elements in correct order using mergeSort technique
 * 
 *  @description    
 * 
 *  @file           : mergeSort.js
 *  @overview       : sorting elements with the help of mergeSort technique
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 4-08-2018
 *
 ******************************************************************************/
/*****************************************************************************
 * Algorithm:
 * takes the input elements from user
 * Divide the unsorted list into  sublists, each containing  element.
 * Take adjacent pairs of two single lists and merge them to form a list of 2 elements. 
 *  will now convert into  lists of size 2.
 * Repeat the process till a single sorted list of obtained.
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility=require('../utility/utility');
function mergeSort()
{
   var size = prompt("enter size of an array: ");
   var arr=new Array(size);
   for(i=0;i<size;i++)
   {
       arr[i]=prompt("enter the element");
   }
   
   console.log(arr);
   var x= arr.length-1;

   var result=utility.sort(arr,0,x);
   console.log("the sorted elements are"+result);
   

}
mergeSort();