var readline = require('readline');
var utility = require('../utility/linkedLists.js');
var utility2 = require('../utility/stack.js');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function primeAna() {
    read.question('Enter the range ', function (range) {
        var arr = [];
        var arr1 = [];
        var x;

        var count = 0;
        var list = new utility();
        var stack = new utility2();

        for (var i = 2; i <= range; i++) {
            var flag = false;
            for (var j = 2; j <= i / 2; j++)    //*  This gives all the prime numbers between the given range

            {
                if (i % j === 0) {
                    flag = true;
                }
            }
            if (flag === false) {
                arr.push(i);

            }
        }
        for (var i = 0; i <= arr.length - 1; i++) {
            for (var j = i + 1; j <= arr.length; j++)//compares anagrams within all the primes using 2 for loops
            {
                var s1 = '' + parseInt(arr[i]);
                /**parseInt()
                 ** Description:
                  * The parseInt() function parses a string and returns an integer. */
                var s2 = '' + parseInt(arr[j]);
                if ((((s1.split('')).sort()).join()) === (((s2.split('')).sort()).join()))  //compares the 2 strings by sorting & spliting
                {
                 console.log(s1 + " and " + s2 + " are anagrams ");
                    arr1.push(parseInt(s1));
                    var x = removeDuplicates(arr1);
                }
            }
        }

        function removeDuplicates(arr1) {
            var unique = [];

            for (var i = 0; i < arr1.length; i++) {
                if (unique.indexOf(arr1[i]) == -1) {
                    unique.push(arr1[i]);
                }
            }
            return unique;

        }

        console.log("The anagrams are : " + x);


        for (var i = 0; i < x.length; i++) {
            list.add(x[i]);
        }
        var k = list.printList();
        console.log("The anagrams in the list are : " + k);

        for (var i = 0; i < x.length; i++) {
            var m = list.GetElement(i);
            stack.push(m);
        }
        var res = stack.printStack();

        console.log("the anagrams in stack are : " + res);
        console.log("The reversed anagrams are : ");


        for (var i = x.length; i > 0; i--) {
            console.log(stack.pop());
        }

        read.close();

    });

}
primeAna();