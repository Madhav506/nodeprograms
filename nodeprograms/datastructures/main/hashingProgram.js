/******************************************************************************
 *  Execution       :   6. default node         cmd> node hashingProgram.js 
 * 
 *  Purpose         :code to print  list of numbers to file and save it in file using hashing
 *  @description    
 * 
 *  @file           : hashingProgram.js
 *  @overview       : code to print  list of numbers to file and save it in file using hashing

 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 10-09-2018
 *
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/utility/hashNumbers.js');
var fs = require('fs');

function hashFunc() {
    var arr = new Array(10), arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [], arr10 = [], arr11 = [];
    var list = new utility();
    var data = fs.readFileSync('filehash.txt');
    data = data.toString().split(" ");
    var arr = Array.from(data);
    arr.sort();//sorting the array
    console.log(arr);
    var val = prompt(" enter a element to search: ");
    for (var i = 0; i < data.length; i++) {
        list.add(data[i]);
    }
    list.printList();
    var result = list.indexOf(val);
    if (result == -1) {
        console.log("Element not present!");
        list.add(val);
    }
    else {
        console.log("Element is present!!");
        list.removeElement(val);
    }
    val = list.printList();
    for (var j = 0; j < data.length; j++) {
        var res = parseInt(data[j]) % parseInt(data.length);
        switch (parseInt(res)) {
            case 0:
                arr1.push(data[j]);
                break;

            case 1:
                arr2.push(data[j]);
                break;

            case 2:
                arr3.push(data[j]);
                break;

            case 3:
                arr4.push(data[j]);
                break;

            case 4:
                arr5.push(data[j]);
                break;

            case 5:
                arr6.push(data[j]);
                break;

            case 6:
                arr7.push(data[j]);
                break;

            case 7:
                arr8.push(data[j]);
                break;

            case 8:
                arr9.push(data[j]);
                break;

            case 9:
                arr10.push(data[j]);
                break;

            case 10:
                arr11.push(data[j]);
                break;

        }
    }
    var array = [];
    array.push(arr1);
    array.push(arr2);
    array.push(arr3);
    array.push(arr4);
    array.push(arr5);
    array.push(arr6);
    array.push(arr7);
    array.push(arr8);
    array.push(arr9);
    array.push(arr10);
    array.push(arr11);

    for (var k = 0; k < array.length; k++) {
        console.log("a[" + k + "] => " + array[k].join('=>'));
    }
    //appending data to file
    fs.appendFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/filehash.txt', array.join('-->'), function () { console.log('completed') })
}
hashFunc();