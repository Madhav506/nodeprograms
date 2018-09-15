var fs = require('fs')
var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/utility/linkedLists.js');
var list = new utility();
const util = require('util')

//var array = [];
var k;

class StockAccount {
    constructor(stockname, numberofshare, shareprice) {
        this.stockname = stockname;
        this.numberofshare = numberofshare;
        this.shareprice = shareprice;
    }

    //to buy shares
    buy() {
        var stock = prompt('enter number of stocks: ');
        for (var i = 1; i <= stock; i++) {
            var name = prompt('enter the name: ');
            var number = prompt('enter the number of share: ');
            var price = prompt('enter the price: ');
            var object = {
                stockname: name,
                shares: number,
                price1: price

            }
            var z = util.inspect(object);//inspect returns object as it is

            list.add(z);

            k = list.printList();
            console.log("The stock report after adding stock is  " + k);
        }


    }
    //logic for selling
    sell() {
        var i = prompt('which stock index do you want to remove ');

        list.removeFrom(i);
        var m = list.printList();
        console.log("The stock report after removing index  " + i + " object is " + m);
    }
}

var obj = new StockAccount();
while (1) {
    console.log('1.Buy the  Stocks');
    console.log('2.Sell the Stocks');
    //console.log('3.Print the Stock Report');
    console.log('5.Exit');
    var choice = prompt('choose an option to perform desired operation :');
    switch (choice) {
        case '1': obj.buy()
            break;
        case '2': obj.sell()
            break;

        case '3': process.exit()
            break;

        default: console.log('No Such Option ')
            break;
    }
}


