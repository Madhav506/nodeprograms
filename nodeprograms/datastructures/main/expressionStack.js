/******************************************************************************
 *  Execution       :   3. default node         cmd> node expressionStack.js 
 * 
 *  Purpose         :code to print whether the given expression was balanced or not
 *  @description    
 * 
 *  @file           : expressionStack.js
 *  @overview       : code to print whether the given expression was balanced or not

 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 7-09-2018
 *
 ******************************************************************************/

fs = require('fs');
var utility = require('../utility/stack.js');
var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function stack() {

    read.question('enter the expression: ', function (exp) {
        var stack = new utility();
        var len = exp.length;
        var first = 0, last = 0;

        for (var i = 0; i < len; i++) {
            var ch = exp.charAt(i);

            if (ch == '(') {
                stack.push(i);//pushing elements in expression to stack 
                first++;
            }
            else if (ch == ')') {
                try {
                    stack.pop();//popping or removing element from stack
                    last++;
                }
                catch (err) {
                    console.log("unbalanced");
                }
            }
        }
        if (stack.isEmpty() && (first == last)) {
            console.log("balanced equation");
        }
        else {
            console.log("unbalanced equation");
        }

        read.close();
    });
}
stack();
