var prompt = require('prompt-sync')();
fs = require('fs');
var data = fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/oops/main/fileReg.txt', 'utf8');
//console.log(data);
var a = /[a-zA-Z]/g;
var b = /[0-9]/g;
var c = /[!@#$%^&*()-+><?"']/g;
var count = 0;
var name = prompt("Enter your first name : ");


    var arr1 = [];
    arr1.push(name);

    for (var i = 0; i < arr1.length; i++) {

        if (arr1[i].search(b) == -1 && arr1[i].search(c) == -1)//to consider only alphabets
        {
            count++;
        }
    }
    if (count == arr1.length) {
        data = data.replace("<<name>>", name);
        //console.log(data);
    }
else {
    console.log("please enter valid username  only ");
    return;
}


var fullname = prompt("Enter your full name : ");


    var arr2 = [];
    var count1 = 0;
    arr2.push(fullname);

    for (var i = 0; i < arr2.length; i++) {

        if (arr2[i].search(b) == -1 && arr2[i].search(c) == -1)//to consider only alphabets
        {
            count1++;
        }
    }
    if (count1 == arr2.length) {
        data = data.replace("<<full name>>", fullname);
        //console.log(data);
    }
else {
    console.log("please enter valid name only ");
    return;

}

var phonenum = prompt("Enter your phone number : ");

var arr3 = [];

if (phonenum.length == 10) {
    var count2 = 0;
    arr3.push(phonenum);

    for (var i = 0; i < arr3.length; i++) {

        if (arr3[i].search(a) == -1 && arr3[i].search(c) == -1)//to consider only alphabets
        {
            count2++;
        }
    }
    if (count2 == arr3.length) {
        data = data.replace(/­xxxxxxxxxx/g, phonenum);
        //console.log(data);
    }
}
else {
    console.log("enter 10 digit valid number ");
    return;
}

var date = new Date();
var l = date.getDate();
var m = date.getMonth();
var n = date.getFullYear();
var k = (l + "/" + m + "/" + n);
data = data.replace("01/01/2016.", k);
console.log(data);


fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/oops/main/fileReg.txt', data);


