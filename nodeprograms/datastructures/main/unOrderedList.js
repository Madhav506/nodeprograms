/******************************************************************************
 *  Execution       :   11. default node         cmd> node unOrderedList.js 
 * 
 *  Purpose         :code to print 2D array with prime numbers as elements in it
 *  @description    
 * 
 *  @file           : primeArray.js
 *  @overview       : code to print 2D array with prime numbers as elements in it

 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 6-09-2018
 *
 ******************************************************************************/
var utility=require('../utility/linkedLists.js');
fs=require('fs');
//read data to file 
var data=fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file1.txt','utf8');
//console.log(data);

var string=" ";
data=data.toString().split(' ');//splitting data to characters



var readline=require('readline');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function unOrderedList()
{

read.question('Enter the element to search: ',function(element){

var list=new utility();
//list.add(data);

for(var i=0;i<(data.length);i++)//adding data to list
{
    list.add(data[i]);   
}

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

/*writefilesync function overwrites the data in file*/ 
fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file1.txt',string) ;

read.close();
});
}
unOrderedList();

