/******************************************************************************
 *  Execution       :   4. default node         cmd> node bankingQueue.js 
 * 
 *  Purpose         :code to print banking cash counter to deposit and withdraw
 *  @description    
 * 
 *  @file           : bankingQueue.js
 *  @overview       : code to print banking cash counter to deposit and withdraw
 * 

 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 8-09-2018
 *
 ******************************************************************************/
var prompt = require('prompt-sync')()
var utility= require('../utility/queue.js')
function cashCounter()
{
    
    var queue = new  utility();
    // Testing dequeue and pop on an empty queue
    if(queue.isEmpty())
    {
        console.log("queue is empty");
    }
    else{

        console.log("queue not empty");

    }
    var minimumamount = 1000;
    var customers = prompt("Enter number of customers : ");
    for (var i = 0; i < customers; i++) {
        queue.enqueue(i);
    }
    //console.log(q.len());

    while (queue.length()) {
        var option = prompt("Enter 1 to withdraw and 2 to deposit amount: ");
        if (option == 1) {
            var withdraw_amt = prompt("Enter the amount to be withdrawn: ");
            if (minimumamount >= withdraw_amt) {
                var balance = minimumamount - withdraw_amt;
                console.log("available balanace= " + balance);
            }
            else{
                console.log("you have insufficient balance");
            }
        }
        else if (option == 2) {
            var dep_amt = prompt("Enter the amount to be deposited: ");
            balance = Number(minimumamount) + Number(dep_amt);
            console.log("available balance= " + balance);
        }

        queue.dequeue();


    }
}

cashCounter()