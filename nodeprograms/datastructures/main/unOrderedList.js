/******************************************************************************
 *  Execution       :   1. default node         cmd> node unOrderedList.js 
 * 
 *  Purpose         : code to print list of words to a file from console.
 *  @description    
 * 
 *  @file           : unOrderedList.js
 *  @overview       : print list of words to a file

 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 6-09-2018
 *
 ******************************************************************************/
var utility = require('../utility/linkedLists.js');
fs = require('fs');

//read data to file 
var data = fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file1.txt', 'utf8');

console.log("");
console.log(data);
console.log("");


var string = " ";//empty string
data = data.toString().split(' ');//splitting data to characters
var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function unOrderedList() {
    console.log("");
    read.question('Enter the element to search: ', function (element) {
        if(isNaN(element)){

        var list = new utility();

        //list.add(data);

        for (var i = 0; i < (data.length); i++)//adding data to list
        {
            list.add(data[i]);
        }

        //string = list.printList();

        if (list.indexOf(element) == -1)/*if the element not found adding that element to list*/ {
            console.log(" ");
            console.log(element + " not found in the file , so it will be added to file ");
            console.log(" ")
            list.add(element);

        }
        else {
            console.log(" ");
            console.log(element + " found in the file,so it will be removed from file ");
            console.log(" ");
            list.removeElement(element);/**if element is found remove from file*/
        }
        string = list.printList();
        console.log(string);

        /*writefilesync function overwrites the data in file*/
        fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file1.txt', string);
        console.log(" ");
    }
    else{
        console.log("please enter strings...");
    }


        read.close();
    });
}
unOrderedList();

