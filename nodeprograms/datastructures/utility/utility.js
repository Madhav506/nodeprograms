var prompt = require('prompt-sync')();

module.exports = {
    /**printing prime numbers in 2D array */
    primeArray: function(rows){

        var arr=new Array(rows);//create array of rows
    
        var columns=prompt("Enter number of columns : ");
        for(var i=0;i<rows;i++)
        {
            arr[i]= new Array(columns);//create array of columns
    
            for(var j=0;j<columns;j++)
            {
                //arr[i][j]=prompt('Enter the element : ');
                arr[i][j]=this.prime(arr);
                
            }
        }
        console.log(arr);//prints the array
    },
    prime: function(arr){
        var arr=[];
             var count=0;
             
           for(var i=2;i<=20;i++)
           {
               var flag=false;
               for(var j=2;j<=(i/2);j++)    //*  This gives all the prime numbers between the given range
                                           
               {
                   if(i%j===0)
                   {
                       flag=true;
                   }
               }
               if(flag===false)
               {
                   //console.log(i);
                    arr.push(i);
               }    
           }
           return arr;
},

/******************************************************************************* */
    
}