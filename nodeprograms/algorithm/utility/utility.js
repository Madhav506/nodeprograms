
//const _ = require('lodash');
var prompt = require('prompt-sync')();

module.exports = {
    /**
     * Detecting whether the given strings are anagrams are not
     */
    anagram: function(string1,string2){
        var flag=0;//until condition true flag is to be  0
        if(string1.length== string2.length) {

            /*loops for comparing strings*/
			for(var index1 = 0;index1<string1.length;index1++) {
                flag=0;
                
				for(var index2 = 0;index2<string2.length;index2++){

                    if(string1.charAt(index1) == string2.charAt(index2))
                    {
                         flag = 1;/**if the character of the first string matches to the character of the other string,
                                 then we initialize 1 to the flag, and exit the loop otherwise flag will be 0 */
                         break;
                            }
                        }
        if(flag==0)//no character matching 
        {
            var flag1 = 1;//true
            break;
        }
            
            }
            if(flag1==1)/*No matching not anagrams*/
            {
                console.log(a+" and "+" "+ b+" are not Anagram to Each Other..!!");
                //sarr1.push(parseInt(a));

            }
            else
            {
                console.log(a+" and "+ b +" are Anagrams");

            }
        
    }
    else
    {
        console.log("please enter strings with equal length");
    }
},

/**
 * printing primenumbers between 0 and 1000
*/
prime: function(range, range1){
    
    var range,range1,arr =[];
    if(range>0&& range1<=1000)
    {
   for(var i=range ;i<=range1;i++) //here you can give your own range

   {
        var k=0;

         for(var j=range;j<=i;j++)
         {
                  if(i%j==0)//if modulus of 2 is 0 its not prime number
                  {
                    
                      k++;
                    
                  }
        }
         if(k==2)
         {
         arr.push(i);
         //prints the prime numbers range between 1 and 1000
 }
}
console.log("prime numbers are:"+arr);
    }
else{
    console.log("please enter values between 1 and 1000")
}
return arr;

},
/**program to print prime numbers that are palindrome and anagrams */

primeAnaPal: function(min,max)
    {
            var count,min,max,arr=[],x=[],y=[];
            if(min>0 && max<=1000)
         {
             
            for(var i=min;i<=max;i++)
            {
                count=0;
                var curr=i;
                for(var j=1;j<=curr;j++)
                {
                    if(curr%j==0)
                    {
                        count++;
                    }
                }
                if(count==2)
            {
                arr.push(curr);
                
            }
          } 
          console.log("Prime numbers are:  " +arr);  
          x=palindrome(arr);
          //console.log(s1)
          console.log("The palindromes are: "+x)
          y=anagram(x); 
          console.log(" anagrams are: "+y);
        }
        else
        {
            console.log("Please enter a value between 0-1000");
        }
        
    function palindrome(arr)
    {
        var array=[]
        
        for(var i=0;i<arr.length;i++)
        {
            var m1=''+parseInt(arr[i]);
           if(m1===m1.split("").reverse().join(""))
           {
               array.push(m1);
           }
           
        }
        return array;
    }
    function anagram(x)
    {
        var arr2=[],a1,a2;
        var arr1=x;
       //console.log(arr);
        for(var i=0;i<x.length;i++)
        {
            for(var j=0;j<arr1.length;j++)
            {
                a1=''+parseInt(x[i]),a2=''+parseInt(arr1[j]);
                if(a1.split('').sort().join('') === a2.split('').sort().join(''));
                 {
                     arr2.push(a1);
                     var distinct = new Set(arr2);
                     setArray=Array.from(distinct);
                     //console.log(a1 +"and "+a2+"are anagrams")
                 }
            }
        }
        
        return setArray;
     }
},
bisearchnum:function(arr)
    {
       var search=prompt("enter the search element");
        var first=0;flag=0;a=0;
        var last=arr.length-1;
        arr.sort(function(a,b) { return a-b; });
        console.log(arr);
        while(first<=last)
        {
            var mid=Math.floor((first+last)/2);
            if(search===arr[mid])
            {
                flag=1;
                break;
            }
            else
                if(search>arr[mid])
                {
                    
                
                        first=mid+1;

                    }
                    else
                    {
                        last=mid-1;
                    }
                
            }
            if(flag==1)
            {
                console.log("element found at index : "+mid);

            }
            else{
                console.log("element not found ");
            }
        
         
    },/*
    bisearchstring:function(arr,search)
    {
        var mid=arr.indexOf(search);
        return mid;

    },*/
    insertionum:function(arr)
    {
        var n=arr.length;
        for(var i=1;i<n;i++)
        {
            var key=arr[i];;
            var j=i-1;
            while(j>-1 && arr[j]>key)
            {
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=key;
        }
        console.log(arr);

    },
    
    bubblenum:function(arr)
    {
        var n=arr.length-1;
        for(var i=0;i<n;i++)
        {
            for(var j=0;j<n-i;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        console.log(arr);
    },
    /*
        merge:function(arr)
    {
        this.sort(arr);
        console.log(arr);
    },
    sort:function(arr)
    {
        if(arr.length==1) return;
        var m=Math.floor(arr.length/2);
        var a1=new Array(m);
        var a2=new Array(arr.length-m);
        var i;
        for(var i=0;i<a1.length;i++) a1[i]=arr[i];
        for(var j=0;j<a2.length;j++,i++) a2[j]=arr[i];
        this.sort(a1);
        this.sort(a2);
        this.merge1(a1,a2,arr);

    },
    merge1:function(a,b,c)
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length)
        {
            if(a[i]<b[j])
            {
                c[k]=a[i];
                k++;i++;

            }
            else{
                c[k]=b[j];
                k++;j++;
            }
        }
        while(i<a.length)
        {
            c[k]=a[i];
            k++;i++;

        
        }
        while(j<b.length)
        {
            c[k]=b[j];
            k++;j++;

        }

    },
    bubble:function()
    {

    }


}*/
dayWeek: function(month,day,year){
    {
    var year1 = (year - Math.floor((14 - month)/ 12));
    //console.log(year1);
    var x = (year1 +Math.floor(year1/4)- Math.floor(year1/100) + Math.floor(year1/400));
    //console.log(x);

    var month1 = (month + 12* (Math.floor(14 - month) / 12)-2);
    //console.log(month1);
    var day1 = Math.floor((day + x +(31*month1 )/ 12) % 7);
    console.log(day1);
    }
    switch(parseInt(day1))
    {
        case 0:console.log("sunday");
               break;
        case 1:consol.log("Monday");
               break;
        case 2:console.log("Tuesday");
               break;
        case 3:console.log("Wednesday");
               break;
        case 4:console.log("Thursday");
               break;
        case 5:console.log("friday");
               break;
        case 6:console.log("saturday");
               break;
        default:console.log("no such day found");
    }
		
},
binsearchWord: function(arr,search)
{
    
    arr=arr.sort(function(a,b) { return a-b; });
    console.log(arr);
    var first=0,last=arr.length-1;
    while(first<=last)
    {
        var mid=Math.floor((first+last)/2);
        if(search===arr[mid])
        {
            flag=1;
            break;
        }
        else
            if(search>arr[mid])
            {
                
                
                    first=mid+1;
            }
                else
                {
                    last=mid-1;
                }
            
        }
        if(flag==1)
        {
            console.log("element found at index : "+mid);

        }
        else{
            console.log("element not found ");
        }
    
     
},
}






















































