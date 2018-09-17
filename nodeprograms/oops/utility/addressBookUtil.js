var prompt = require('prompt-sync')();
var fs = require('fs')
var array2=new Array();


class Address {

    constructor(firstname, lastname, phonenumber, ycity, ystate, yzip) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.ycity = ycity;
        this.ystate = ystate;
        this.yzip = yzip;
    }

    update(arr1) {
        // var option1 = prompt('enter the details of person  which you wanted to update ? ');
        console.log('please enter the updated address you want to enter ');
        var number = prompt('enter the phone number of a person ');
        var city = prompt('Enter the city name ');
        var state = prompt('Enter the state name ');
        var zip = prompt('Enter the zip ');
      
            array2.push({
                //"name1": arr1.nameA[i],
                //"name2": arr1.nameB[i],
                "number": number,
                "city": city,
                "state": state,
                "zip": zip

            })

            //console.log(array2);
            return array2;
        }
        
        sortBy(arr1, key) {
                return arr1.sort(function(a, b) {
                    var x = a[key]; var y = b[key];
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                });
            }
        
            
       


    }
 module.exports = Address;