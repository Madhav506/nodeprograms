fs=require('fs');
var utility=require('../utility/utility1`.js');
var readline=require('readline');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function stack() {
    
    read.question('enter the expression: ',function(exp){
        var stack=new utility();
        var len=exp.length;
    var first=0,last=0;

        for (var  i = 0; i < len; i++)
		{    
		var ch = exp.charAt(i);

			if (ch == '(')
			{
            stack.push(i);
            first++;
			}
				else if (ch == ')')
				{
                stack.pop();
                last++;
                }  
            }          
	if(stack.isEmpty() && (first==last))
		{
            console.log("balanced equation");
        }
        else{
            console.log("unbalanced equation");
        }
   
read.close();
});
}
stack();
