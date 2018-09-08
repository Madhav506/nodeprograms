var utility=require('../utility/hash');
fs=require('fs');
var data=fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file3.txt','utf8');
//console.log(data);
var order=new order;

var string=" ";
data=data.toString().split(' ');



var readline=require('readline');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function hashing()
{

read.question('Enter the element to search: ',function(element){

var list=new utility();
//list.add(data);

var array = new Array();
for(var i=0; i<array.length; i++)
		{
			var  rem = array[i]%11;
			if(list[rem]== null)
			{
				order[rem] = new hash();
				order[rem].add(array[i]);
			}
			else
			{
				order[rem].add(array[i]);
            }
		}
		for(var i=0;i<11;i++)
		{
			console.log(i);
			if(order[i] !=null)
			{
				order[i].display();
			}
		}
});
}
hashing();