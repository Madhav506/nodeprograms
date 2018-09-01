var fs=require('fs');
var readline=require('readline');
var utility=require('../utility/utility');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
var data=fs.readFileSync('file.txt');
data=data.toString().split(',');
function binsearchWord()
{
    read.question('Enter the element to search: ',function(element){
            utility.binsearchWord(data,element);
        read.close();
});
}
binsearchWord();