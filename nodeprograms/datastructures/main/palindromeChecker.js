var readlineSync=require('readline-sync');

var utility=require('../utility/palindRome.js');
function  palinchecker()
{
    var str1=[];

    var dequeue=new utility();
    var string=readlineSync.question("Enter the string value to for palindrome: ");
   var string = string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');


    if(isNaN(string)==false)
    {
        console.log("Enter the string value: ");
    }
    else
    {
    var str= string.toLowerCase().split('');
    console.log(str);

     removeSpaces(str);

    function removeSpaces(str)
    {
        for(var i=0;i<str.length;i++)
        {
            if(str[i]!=' ')
            {
                str1.push(str[i]);
            }
        }
        console.log(str1);

    }

    for(var i=0;i<str1.length;i++)
    {
        dequeue.addRear(str1[i]);
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
    if(flag === true)
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