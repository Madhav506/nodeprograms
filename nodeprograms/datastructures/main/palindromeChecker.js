/***************************************************************************
 *  Execution       :   5. default node         cmd> node palindromeChecker.js 
 * 
 *  Purpose         :code to check whether given string is palindrome are not
 * 
 *  @description    
 * 
 *  @file           : palindromeChecker.js
 *  @overview       :code to check whether given string is palindrome are not

 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 7-09-2018
 *
 ******************************************************************************/

var readlineSync=require('readline-sync');

var utility=require('../utility/palindRome.js');
function  palinchecker()
{
    var str1=[];

    var dequeue=new utility();
    var string=readlineSync.question("Enter the string value to check for palindrome: ");
   //var string = string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

    if(isNaN(string)==false)
    {
        console.log("Enter the string value ");
    }
    else
    {
    var str= string.toLowerCase().split('');//converting strings to lowercase if they are given in uppercase
   
    console.log(str);

     removeSpaces(str);//function to remove spaces between characters

    function removeSpaces(str)
    {
        for(var i=0;i<str.length;i++)//loops iterates until string length
        {
            if(str[i]!=' ')//if string not equal to empty space
            {
                str1.push(str[i]);
            }
        }
        console.log(str1);

    }

    for(var i=0;i<str1.length;i++)
    {
        dequeue.addRear(str1[i]);//adding elements in rear
    }
    var flag=true;

    while(dequeue.size()>1 && flag==true)
    {
      var first=dequeue.removeFront();

      var last=dequeue.removeRear();
      if (first != last)
       {
          flag = false;
       }
       else
       {
          flag = true;
       }
    }
    if(flag == true)
    {
        console.log("the given string is a palindrome");
    }
    else
    {
       console.log("the given string is not a palindrome");
    }
    }
}
palinchecker();