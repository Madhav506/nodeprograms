var utility = require('../utility/linkedLists');
fs = require('fs');
var data = fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file2.txt', 'utf8');
    
console.log(data);

data = data.toString().split(' ');

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
    var list = new utility();

    for (var i = 0; i < (data.length); i++)//adding data to list
    {
        list.add(data[i]);
    }
    console.log("ascending order of list: ");
    var string = list.printList();

    console.log(string);

    read.question('Enter the element to search: ', function (element) {
        //string = list.printList();
        if (list.indexOf(element) == -1) {
            list.add(element);

        }
        else {
            list.removeElement(element);
        }
        string = list.printList();
        console.log(string);

        var str= string.split('');

        console.log(str);
        var x=str.length;
        insertionSort(x);

        function insertionSort(x) {

            console.log();
            console.log();
            console.log("________________________ INSERTION SORT FOR INTEGERS____________________________");
            console.log();
            console.log();

           // var len = string.length;

            var arr = new Array(x);
            var n = arr.length;
            console.log(n);
            for (var i = 1; i < n; i++) {
                var key = arr[i];;
                var j = i - 1;
                /* Move elements of arr[0..i-1], that are
              greater than key, to one position ahead
              of their current position */
                while (j > -1 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }

                arr[j + 1] = key;
            }
            console.log(arr);

        }
 /* string=list.printList();
 console.log(string);
        fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file1.txt',string) */
        read.close();

    });
}
orderedList();
