var utility = require('../utility/linkedLists');
fs = require('fs');
var data = fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file2.txt', 'utf8');

console.log(data);

datas= data.toString().split(' ');
var data=[];
for(var i=0;i<datas.length;i++){
if(datas[i]!='')
{
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
    var string = list.printList();

    console.log(string);

    read.question('Enter the element to search: ', function (element) {
        //string = list.printList();
        if (list.indexOf(element) == -1) {
            list.insertSort(parseInt(element));//inserts a element at appropriate position
        }
        else {
            list.removeElement(parseInt(element));
        }
        string = list.printList();
        console.log(string);
        fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/main/file2.txt', string);

        read.close();

    });
}
orderedList();
