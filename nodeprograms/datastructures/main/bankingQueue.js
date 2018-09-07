fs=require('fs');
var utility=require('../utility/queue.js');
var readline=require('readline');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function queue() {
    
    read.question('enter the expression: ',function(exp){
        var queue=new utility();
        var ch = 0;
		do
		{ 
			console.log("");
			console.log("Banking Cash Counter");
			console.log("1.Deposit");
			console.log("2.Withdraw");
			console.log("3.Number of people in the Queue ");
			console.log("4.Exit");
			console.log();
			console.log("Enter your choice: ");
		   	var choice=prompt("enter choice:");
		   	switch (choice) 
		   	{
			
			   }
	   	}
		while(ch<5);
		read.close();
});

	}		 
queue();
