
/******************************************************************************
 *  Execution       :   2. default node         cmd> node binarySearch.js 
 * 
 *  Purpose         :  searching for a word in a file with binary search
 * 
 *  @description    
 * 
 *  @file           : binarySearchWord.js
 *  @overview       : seraching for a word in file and displaying where it is present i.e index 
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 3-08-2018
 *
 ******************************************************************************/
/*****************************************************************************
 * Algorithm
 * create a .txt file enter data in it
 * take the user input and search for the data in that file
 * search the data at which index it is present  using binarysearch
 * Compare search with the mid element.
 * If search matches with mid element, we return the mid index.
 * Else If search is greater than the mid element, then search can only lie in right half subarray after the mid element.
 * So we recur for right half.
 * Else (search is smaller) recur for the left half.
 ******************************************************************************/
var fs=require('fs');
var readline=require('readline');
var utility=require('../utility/utility');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
var data=fs.readFileSync('file.txt');
data=data.toString().split(',');
function binsearchWord()
{
    read.question('Enter the element to search: ',function(element){
            utility.binsearchWord(data,element);
        read.close();
});
}
binsearchWord();