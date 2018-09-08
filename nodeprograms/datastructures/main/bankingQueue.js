var readlineSync = require('readline-sync');

var utility = require('../utility/queue.js')
function transaction() {
    var cashObj = new utility();
    var persons = readlineSync.question("enter no of persons in the queue at present ")
    if (isNaN(persons)) {
        console.log("enter number of persons,try again..")
        transaction();
    }
    for (var i = 0; i < persons; i++) {
        cashObj.queue(i);
    }
    while (cashObj.isEmpty() > 0) {
        var sel = readlineSync.question("enter your choice of 1.deposit 2.withdrawal 3.checkbalance-->")
        switch (sel) {
            case '1': cashObj.cashdeposit(readlineSync);
                break;
            case '2': cashObj.withdraw(readlineSync);
                break;
            case '3': cashObj.checkbalance();
                break;
            default: console.log("invalid input,try again...")
        }
            cashObj.dequeue();
        var add = readlineSync.question("Do you need to add persons to the queue Y:yes N:No-->")
        if (add == 'Y' || add=='y') {
            var number = readlineSync.question("enter number of persons u want to add: ")
            for (var i = 0; i < number; i++) {
                cashObj.queue(i)
            }

        }
    }
    if (cashObj.isEmpty() == 0) {
        console.log("Queue is empty..Transaction done ")
    }
}
transaction();