/******************************************************************************
 *  Execution       :   2. default node         cmd> node orderedList.js 
 * 
 *  Purpose         :code to sort the list of numbers to file and save it in file
 *  @description    
 * 
 *  @file           : orderedList.js
 *  @overview       : code to sort the list of numbers to file and save it in file

 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 7-09-2018
 *
 ******************************************************************************/
var utility = require('../utility/linkedLists');
fs = require('fs');
//read data from file 
var data = fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file2.txt', 'utf8');

console.log(data);

datas = data.toString().split(' ');//splitting string to characters using split function
var data = [];
for (var i = 0; i < datas.length; i++) {
    if (datas[i] != '') {
        data.push(datas[i]);
    }
}
//console.log(data);


data.sort(function (a, b) {
    return a - b;
});

var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function orderedList() {
    //var array = [];
    var list = new utility();

    for (var i = 0; i < (data.length); i++)//adding data to list
    {
        list.add(data[i]);
    }
    console.log("ascending order of list: ");

    var string = list.printList();//print the list

    console.log(string);

    read.question('Enter the element to search: ', function (element) {
        //string = list.printList();
        if(!(isNaN(element))){

        if (list.indexOf(element) == -1) {
            list.insertSort(parseInt(element));//inserts a element at appropriate position
        }

        else {
            list.removeElement((element));//removing element
        }
        string = list.printList();
        console.log(string);

        //overwriting list of numbers to file after sorting
        
        fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file2.txt', string);
    }
    else{
        console.log("please enter valid input");
    }
        read.close();

    });
}
orderedList();
