var readline=require('readline');
var utility=require('../utility/utility');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function Vendingmachine()
{
    var index=0;
    var notes=[1000,500,100,50,20,10,5,2,1];

    read.question('Enter the amount ',function(money){
        
 if(money>0){
    
    var money=utility.Vendingmachine(money,notes,index);
}
else{
    console.log("please enter positive value of amount");
}
    read.close();

});
}
vendingmachine();