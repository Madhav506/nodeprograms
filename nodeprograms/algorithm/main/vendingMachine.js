/******************************************************************************
 *  Execution       :   10. default node         cmd> node vendingMachine.js 
 * 
 *  Purpose         : calculating the minimum number of Notes as well as the Notes to be returned 
 *                    by the Vending Machine as a change
 * 
 *  @description    
 * 
 *  @file           : vendingMachine.js
 *  @overview       : minimum number of Notes as well as the Notes to be returned 
 *                    by the Vending Machine as a change
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 4-08-2018
 *
 ******************************************************************************/
/********************************************************************************
 * Algorithm:
 * taking the userinput money
 * calculating the money whether it has 1000 notes or 500 or 100 or 50 or 20 or10 or 5 or 2 or 1 rupees
 * and printing minimum number of notes to be returned.
 *********************************************************************************/var readline=require('readline');
var utility=require('../utility/utility');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function vendingMachine()
{

    read.question('Enter the amount ',function(money){
        
 if(money>0){

    
    utility.VendingMachine(money);
   // console.log(total);
}
else{
    console.log("please enter positive value of amount");
}
    read.close();

});
}
vendingMachine();