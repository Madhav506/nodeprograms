var prompt = require('prompt-sync')();
var utility=require('../utility/utility');
function binse()
{
   var num=prompt("enter size of an array: ");
   var arr=new Array(num);
   for(i=0;i<num;i++)
   {
       arr[i]=prompt("enter the element");
   }
   utility.bisearchnum(arr);
   
}
binse();