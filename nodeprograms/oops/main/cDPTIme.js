var utility1 = require('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/utility/linkedLists.js')
var utility2 = require('/home/bridgeit/Madhavi_p/nodeprograms/datastructures/utility/queue.js')
var prompt = require('prompt-sync')();
var q = new utility2();
var prompt = require('prompt-sync')();
var d = new Date();

class StockAccount {

    buy(count) {
        for (var i = 0; i < count; i++) {

            var name = prompt('Enter the name: ');
            var number = prompt('Enter the number of share: ');
            var price = prompt('Enter the price: ');
            var date = (d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear());
            var time = (d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());


            var customer = {
                name: name,
                number: number,
                price: price,
                date: date,
                time: time
            };

            console.log('You have bought the stock on ' + d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear() + ' at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

            q.enqueue(customer)
        }
    }

    sell(count) {
        for (var i = 0; i < count; i++) {

            var res = q.dequeue();
            console.log(res);
        }
    }
    stockList() {
        q.printQueue();
    }
}
var stock = new StockAccount();

while (1) {
    console.log('1.Buy Stocks')
    console.log('2.Sell Stocks')
    console.log('3.Print Stock list')
    console.log('4.Exit')
    var choice = prompt('What operation do you like to perform ? ')
    switch (choice) {
        case '1': var count = prompt("Enter the number of stocks to be bought : ");
            stock.buy(count);
            break;
        case '2': var count = prompt("Enter the number of stocks to be sold: ");
            stock.sell(count)
            break;

        case '3':
            stock.stockList();
            break;

        case '4': process.exit()

    }
}
