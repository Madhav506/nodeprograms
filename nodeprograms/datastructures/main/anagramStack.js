var readline=require('readline');
var utility=require('../utility/linkedLists.js');
var read=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function primeAna()
{
    read.question('Enter the range ',function(range){
            //utility.primeAna(max);
        var arr=[];
        var arr1=[];
        var arr2=[];

        var count=0;
        var list=new utility();

                for(var i=2;i<=range;i++)
                {
                    var flag=false;
                    for(var j=2;j<=i/2;j++)    //*  This gives all the prime numbers between the given range
                                                
                    {
                        if(i%j===0)
                        {
                            flag=true;
                        }
                    }
                    if(flag===false)
                    {
                        arr.push(i);
                        
                    }    
                } 
                console.log("The anagrams are : ");
                for(var i=0;i<=arr.length-1;i++)
                {
                    for(var j=i+1;j<=arr.length;j++)//compares anagrams within all the primes using 2 for loops
                    {
                        var s1=''+parseInt(arr[i]);    
        /**parseInt()
         ** Description:
          * The parseInt() function parses a string and returns an integer. */
                        var s2=''+parseInt(arr[j]);
          if((((s1.split('')).sort()).join())===(((s2.split('')).sort()).join()))  //compares the 2 strings by sorting & spliting
                        {
                            console.log(s1+" and "+s2+" are anagrams ");
                            arr1.push(parseInt(s1));
                        }
                    }
                }
                console.log(arr1);
 
                var userSet= new Set(arr1);

                console.log("distinct anagrams are : ("+[...userSet]+")");
            
                arr2.push([...userSet]);
                //console.log(arr2);


for(var i=0;i<arr2.length;i++)
{
    list.add(arr2[i]);
}
var k= list.printList();
console.log(k);

for(var i=0;i<k.length;k++)
{
var m=list.GetElement(k[i]);
console.log(m);
}













                read.close();

            });
        
}
primeAna();