module.exports =
    {
        primeArray: function (range1, range2) {
            var len = (Math.floor(range2 / 100) + 1);
            var range = Math.floor(range1 / 100);
            var array = [];
            min = range1;
            if (range1 <= 0 && range2 >= 100) {
                max = 100;
            }
            else if (range2 < 100) {
                max = range2;
                console.log(max);
            }

            else {
                max = ((range + 1) * 100);

            }

            if (min == 0 || min == 1) {
                min = 2;
            }
            for (var index = range + 1; index <= len; index++) {
                if ((max - min) <= 100 && max <= range2 && (max - min) != 0) {
                    var arr1 = new Array();

                    for (var i = min; i <= max; i++) {
                        var count = 0;
                        for (var j = 1; j <= i; j++) {

                            if (i % j == 0) {

                                count++;
                            }
                        }
                        if (count <= 2) {

                            arr1.push(i);

                        }
                    }
                    array.push(arr1);
                    if (range2 - max <= 100) {
                        range = Math.floor(min / 100);
                        min = (min + ((range + 1) * 100) - min);
                        max = range2;
                    }
                    else {
                        range = Math.floor(min / 100);
                        min = (min + ((range + 1) * 100) - min);
                        max = max + 100;
                    }

                }

            }
            console.log("\n Prime Numbers are : ");
            console.log(array);

        },

        primeAnagram: function (min, max) {
            var array = new Array();
            if (min == 0 || min == 1) {
                min = 2;
            }
            for (var i = min; i <= max; i++) {
                var count = 0;
                for (var j = 1; j <= i; j++) {
                    if (i % j == 0) {
                        count++;
                    }
                }

                if (count <= 2) {
                    array.push(i);
                }
            }
            return array;

        },
        anagrams: function (str1, str2) {

            var arr1 = str1.split('');
            var arr2 = str2.split('');
            var array1 = removeSpace(arr1);//removing the spaces in array 
            var array2 = removeSpace(arr2);
            function removeSpace(array) {

                var newArray = [];
                for (let i = 0; i < array.length; i++) {

                    if (array[i] != ' ') {
                        newArray.push(array[i]);
                    }

                }

                return newArray;

            }

            var res1 = array1.sort();
            var res2 = array2.sort();

            if (res1.length == res2.length) {

                var output = compare(res1, res2);//compare function to compare two arrays

                function compare(array1, array2) {

                    let count = 0;

                    for (let i = 0; i < array1.length; i++) {

                        if (array1[i] == array2[i]) {

                            count++
                        }
                    }

                    return (array1.length == count);
                }


                if (output) {
                    return true;
                }

                else {
                    return false;
                }

            }

            else {
                return false;
            }

        }
    }


