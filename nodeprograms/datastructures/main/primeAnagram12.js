var readline = require('readline');
var utility = require('../utility/utilityPrime1.js');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout

    });
function primeAnagram() {
    read.question("Enter range1 : ", function (range1) {
        read.question("Enter range2 : ", function (range2) {
            var reg = /[a-zA-Z]/g;
            var reg2 = /[!@#$%^&*().<>+-/*"'`~]/g;
            var array = [];
            if (range1.search(reg) == -1 && range1.search(reg2)==-1 && range1>=0 && range2>0 && range1<1001 && range2<1001) {

                range1 = parseInt(range1);
                range2 = parseInt(range2);
                array = utility.primeAnagram(range1, range2);

                //console.log(" Prime numbers within the  range "+range1+"and "+range2+" are : ");
                //console.log("  ");
                //console.log(array);

                var anagram = [];
                var notAnagram = [];

                for (var i = 0; i < array.length - 1; i++) {

                    for (var j = i + 1; j < array.length; j++) {

                        index1 = array[i].toString();

                        index2 = array[j].toString();

                        var res1 = utility.anagrams(index1, index2);

                        if (res1) {
                            anagram.push(array[i]);
                            anagram.push(array[j]);
                        }

                        else {

                            notAnagram.push(array[i]);
                            notAnagram.push(array[j]);
                        }
                    }
                }

                var anagram1 = [];
                var anagNot = [];
                anagram1 = removeDuplicates(anagram);
                anagNot = removeDuplicates(notAnagram);
                function removeDuplicates(array) {
                var unique = [];
                for (var i = 0; i < array.length; i++) {
                if (unique.indexOf(array[i]) == -1) {

                            unique.push(array[i]);
                        }
                    }

                    return unique;
                }
                var res = [];
                res.push(anagram1);
                res.push(anagNot);
                console.log("  ");
                console.log("Prime which are  anagrams are in 0 index ");
                console.log("  ");
                console.log("Prime which are not anagrams are in 1 index ");
                console.log("  ");
                console.log(res);
                read.close();
            }
            });
    });
}
primeAnagram();