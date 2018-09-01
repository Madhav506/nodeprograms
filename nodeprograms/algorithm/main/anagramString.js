/******************************************************************************
 *  Execution       :   1. default node         cmd> node anagramString.js 
 * 
 *  Purpose         :  Detecting a anagram
 * 
 *  @description    
 * 
 *  @file           : anagramString.js
 *  @overview       : An anagram of a string is another string that contains same characters,
 *                    only the order of characters can be different.
 *                    For example, “abcd” and “dabc” are anagram of each other.
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
/*****************************************************************************
 * Algorithm:
 * 1)read two input strings
 * 2)compare the length of those strings
 * 3)then split them to character array and compare the outer index i.e one string alphabets with 
 * other string each and every character until the inner loop iterates
 * 4)after comparison if they are equal display as anagrams
 * 5)else show not anagrams
 *****************************************************************************/
var readline = require('readline');
var utility=require('../utility/utility');
var read = readline.createInterface(
{
    input: process.stdin,
  output: process.stdout

});
function anagram()
{

read.question('Enter a string : ', function(string1){

read.question('Enter another string : ',function(string2)
 {
   var reg=/[!,@,#,$,%,^,&,*]/g;/*not to accept special characters */
   
   if(isNaN(string1,string2) &&(string1.search(reg)==-1 ) && (string2.search(reg)==-1 ) )
{
  a=string1.toLowerCase();/*toLowercase() used to convert uppercase alphabets to lowercase */
  b=string2.toLowerCase();
  utility.anagram(a,b);
}
else{
  console.log("please enter strings ");
}
 read.close();
});
});
}
anagram();