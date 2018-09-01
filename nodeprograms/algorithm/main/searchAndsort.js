var prompt = require('prompt-sync')();
var utility=require('../utility/utility');
function searchAndsort()
{
   var num=prompt("enter size of an array: ");
   var arr=new Array(num);
   for(i=0;i<num;i++)
   {
       arr[i]=prompt("enter the element");
   }
   var choice=prompt("enter search elements");

   switch (parseInt(choice))
   {
    case 1:utility.bisearchnum();
    break;
    case 2:utility.bisearchstring();
    break;
    //case 3:utility.insertion();
    //break;
    //case 4:utility.bubble();
    //break;
   }
}
searchAndsort();
