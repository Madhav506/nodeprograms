var utility=require('../utility/linkedLists');
fs=require('fs');
var data=fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file2.txt','utf8');
console.log(data);
data=data.toString().split(' ');

data.sort(function(a,b){
    return a-b;
});


var readline=require('readline');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function orderedList()
{


var list=new utility();

for(var i=0;i<(data.length);i++)//adding data to list
{
    list.add(data[i]);   
}
console.log("ascending ordr of list: ");
var string=list.printList();

console.log(string);

read.question('Enter the element to search: ',function(element){
//string = list.printList();
if(list.indexOf(element) == -1 )
{
    list.add(element);
    
}
else{
    list.removeElement(element);
}
string=list.printList();
console.log(string);
string=list.printList();
console.log(string);
fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file1.txt',string) ;





        read.close();
});
}
orderedList();
