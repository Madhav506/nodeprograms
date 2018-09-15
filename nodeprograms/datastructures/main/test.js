fs = require('fs');
let prompt = require('prompt-sync')();
var data1 = fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/filehash.txt', 'utf-8');
var utility = require('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/utility/linkedLists.js');

let data2 = ''

function hashing() {
    data1 = data1.toString().split(' ');//convert the data to string and split it
    var data = [];//creating empty array
    for (var i = 0; i < data1.length; i++) {
        if (data1[i] != '') {
                data.push(data1[i]);

        }
    }

    data = data.sort();
    console.log();
    console.log(data);
    console.log();
    var search = prompt('Enter a number to search : ');
    console.log("  ");
    if (data.indexOf(search) == -1) {
        console.log(' element not found ');
        data.push(search);

    }

    else {
        console.log(' element found present at ' + (data.indexOf(search) + 1) + ' index ');
        console.log("   ")
        data.splice((data.indexOf(search)), 1);


    }

    let result = [];
    //map( ) method creates a new array with the results of calling function for every array elements
    const map1 = data.map(x => x % (data.length + 1));//here map divides and returns new array with the indexes

    for (var i = 0; i<=data.length; i++) {
        var str = '';
        var list = new utility();
        str = str + 'a' + ' [ ' + i + ' ]';
        for (var j = 0; j <= data.length; j++) {

            if (map1[j] == i) {

                str = str + ' -> ' + data[j];

            }

        }

        list.add(str);
        result.push(list.printList());

    }

    console.log(result);
    for (var i = 0; i < data.length; i++) {

        data2 = data2 + ' ' + data[i];
    }
    fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/filehash.txt', data2, 'utf-8');

}

hashing();