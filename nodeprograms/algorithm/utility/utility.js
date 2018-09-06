
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
prime: function(range){
     var arr=[];
          var count=0;
    if(range<=1000)
   {
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
                console.log(i);
            }    
        }
    }
    else{
        console.log("please enter values between 1 and 1000");

    }
    },
 
/**
    
/**program to print prime numbers that are palindrome and anagrams */

primeAnaPal:function(range)
    {
          var arr=[];
          var count=0;
        for(var i=0;i<=range;i++)
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
        var arr1=[];
        console.log("THe anagrams are : ");
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
        console.log(" THe  palindrome are : ");
        for(var i=0;i<arr1.length;i++)
        {
            var sum=0,r;
            var temp=arr1[i];
            var s=arr1[i];
            while(arr1[i]>0)
            {
                r=arr1[i]%10;
                //sum=(sum*10)+r;
                arr1[i]=parseInt(arr1[i]/10);
                sum = (sum * 10) + r;
            }
            if(temp===sum)
            {
                console.log(s+" is palindrome ");
            }
        }         
    },

getTime: function()
{
    var date= new Date();//creating date object
    return date.getTime();
},
getElapsedTime: function(start,stop)
{
    return elapsed=stop-start;//calculate elapsedtime
},

/**Binary search numbers function to sort and display  */

binarySearchNum:function(size)
    {
        console.log();
        console.log();
        console.log("________________________ BINARY SEARCH FOR INTEGERS____________________________");
        console.log();
        console.log();

        var arr=new Array(size);
        for(i=0;i<size;i++){  

           arr[i]=parseInt(prompt("Enter the element "));
       } 

       arr.sort(function(a,b) {return a-b ;});// sorting in ascending order

       console.log(arr);

       var search=prompt("enter the search element ");
       var first=0,last=size-1;

        while(first<=last)
        {
            var mid=Math.floor((first+last)/2);

            if(search == arr[mid])
            {
               var flag=1;
                break;
            }
            else
            {
                if(search>arr[mid])
                {
                        first=mid+1;

                }
                    else
                    {
                        last=mid-1;
                    }
                
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
    binarySearchString:function(size)
    {
        console.log();
        console.log();
        console.log("________________________ BINARY SEARCH FOR STRINGS____________________________");
        console.log();
        console.log();
        var start=this.getTime();
        var arr = new Array(size);
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter strings");
        }
       var a=/[a-zA-Z]/g;
       var b=/[0-9]/g;
       var c=/[!@#$%^&*()-+><?"']/g;
       var count=0;
       for(var i=0;i<arr.length;i++)
       {
           if(arr[i].search(b)==-1 && arr[i].search(c)==-1)//to consider only alphabets
           {
               count++;
           }
       }
       if(count==arr.length)
       {
           arr.sort();
           console.log(arr);
           var search=prompt("enter the search string ");

           var m=arr.indexOf(search);
           if(m>-1)
           {
               console.log("the string prsent in the index "+m);
           }
           else{
            console.log("the string not found in any index");
        }
        var stop=this.getTime();
        res2=this.getElapsedTime(start,stop);
        return res2;

    }
    else
    console.log("please enter only strings");

    },
 insertionSortNum:function(size){

        console.log();
        console.log();
        console.log("________________________ INSERTION SORT FOR INTEGERS____________________________");
        console.log();
        console.log();

       var arr=new Array(size);
       for(i=0;i<size;i++)
       {
           arr[i]=parseInt(prompt("Enter the element "));
       }
        var n=arr.length;
        for(var i=1;i<n;i++)
        {
            var key=arr[i];;
            var j=i-1;
            /* Move elements of arr[0..i-1], that are
          greater than key, to one position ahead
          of their current position */
            while(j>-1 && arr[j]>key)
            {
                arr[j+1]=arr[j];
                j--;
            }

            arr[j+1]=key;
        }
        console.log(arr);

    },


insertionSortString:function(size){

        console.log();
        console.log();
        console.log("________________________ INSERTION SORT FOR STRINGS____________________________");
        console.log();
        console.log();

        var arr = new Array(size);
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter string : ");
        }
       var a = /[a-zA-Z]/g;
       var b = /[0-9]/g;
       var c = /[!@#$%^&*()-+><?"']/g;
       var count = 0;
       for(var i=0;i<arr.length;i++){
        if(arr[i].search(b)==-1 && arr[i].search(c)==-1)//to consider only alphabets
        {
               count++;
           }
       }
       if(count == arr.length)
       {
           arr.sort(function(a,b) {return a-b ;});
        
        var n=arr.length;
        
       
        for(var i=1;i<n;i++)
        {
            var key=arr[i]; /*storing current element whose left side is checked for its 
                              correct position .*/
            var j=i-1;

      /* check whether the adjacent element in left side is greater or
            less than the current element. */
            while(j>-1 && arr[j]>key)
            {
            // moving the left side element to one position forward.
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=key;// moving current element to its  correct position.

        }
        console.log(arr);
    }
    else
    console.log("please enter only strings ");

    },
    
    
    bubbleSortNum:function(size)
    {
        var arr=[];
        console.log();
        console.log();
        console.log("________________________ BUBBLE SORT FOR INTEGERS____________________________");
        console.log();
        console.log();
      for(i=0;i<size;i++)
       {

           arr[i]=parseInt(prompt("Enter the element "));

       }
        var n=arr.length-1;
        for(var i=0;i<n;i++)
        {      
             // Last i elements are already in place   
            for(var j=0;j<n-i;j++)
            {
                if(arr[j]>arr[j+1])
                {//swaps the elements 
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        console.log(arr);
    },


    bubbleSortString:function(size)
    {
        console.log();
        console.log();
        console.log("________________________ BUBBLESORT FOR STRINGS____________________________");
        console.log();
        console.log();

        var arr = new Array(size);
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter strings");
        }
       var a = /[a-zA-Z]/g;
       var b = /[0-9]/g;
       var c = /[!@#$%^&*()-+><?"']/g;
       var count=0;
       for(var i=0;i<arr.length;i++)
       {
           if(arr[i].search(b)==-1 && arr[i].search(c)==-1)
           {
               count++;
           }
       }
       if(count==arr.length)
       {
           arr.sort(function(a,b) {return a-b ;});
       
        var n=arr.length-1;
        for(var i=0;i<n;i++)
        {      

            for(var j=0;j<n-i;j++)
            {
                if(arr[j]>arr[j+1])
                {//swaps the elements 
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        console.log(arr);
    }
    console.log("please enter only strings ");
    },
    /*calendar program to print the day*/
    
dayWeek: function(month,day,year){
    {
         a = (Math.floor((14 - month) / 12));
         a = parseInt(a);

        year1 = year - a;

        month1 = ((month + (12*a)) -2);
        month1 = parseInt(month1);

        day1 = ((day + year1 + Math.floor(year1 / 4) - Math.floor(year1 / 100)
               + Math.floor(year1 / 400) + Math.floor((31 * month1) / 12)) % 7);


        day1= parseInt(day1);

    console.log(day1);
    }
    switch(day1)
    {
        case 0:console.log("sunday");
               break;
        case 1:console.log("Monday");
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
/**
 * binary search of word in a file
 */
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
            var flag=1;
            break;
        }
        else
            if(search>arr[mid])//search element greater than mid element 
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
/**to convert the temperature from celsius to fahrenheit and fahrenheit to celsius */
tempCon:function(cel,fa)
{
    var cel_to_fa=(cel*(9/5)+32);
    var fa_to_cel=(fa-32)*(5/9);
    console.log("the celsius to fahrenheit is : "+cel_to_fa +"℉");
    console.log("the  fahrenheit to celsius  is : "+fa_to_cel+"℃");
},
/**to calculate the square root of a number */
sqrtNum: function(c)
{
    var t=c;
    var epsilon=0.001
    while(Math.abs((t-(c/t)) > epsilon*t) )

    {
        t =(((c/t) + t) / 2); 
    }
    console.log("squareroot of given number "+c+"is"+t);
},
/**
 * to convert a decimal number tobinary number
 */
toBinary: function(number)
{
   var a;
   var b=number;
   var count=0;
   var string='';
   while(number>0)
   {
       a=number%2;//extract the reaminder
       string=a+string;
       s1=0+string;
       //concatenating to string
       number=Math.floor(number/2);//extracts the quotient
   }
  // console.log("binary conversion of decimal number "+b+" is "+s1);
   return s1;
},
/*swapping a nibble and converting to decimal and checking whether it is power of 2 or not*/
binary :function(number)
{
    var s1=this.toBinary(number);
    var nibble1=s1.slice(0,4);
    var nibble2=s1.slice(4);
    console.log(nibble1);
    console.log(nibble2);

    var x=(nibble2+(nibble1));//concatanating two nibbles

    console.log("the swapped nibble is: "+x);

    var count=0;
    var out=0;

    y=parseInt(x);
    
    while(y>0)//converting binary to decimal
    {
        var rem = (y%10);
       var out = out + (rem)*Math.pow(2,count++);
        y = Math.floor(y/10);
    }
    console.log("the decimal number for binary value "+x+" is "+out);



    var z = out;
    var x=this.power(z);
    if(x==true)
    {
        console.log("the number " +z+" is power of 2");
    }
    else{
        console.log("the number "+z+" is not power of 2");
    }
   


},
/*power function*/
power: function(v)
{
  if (v == 0)
    return false;
  while (v!= 1)
  {
      if (v%2 != 0)
         return false;
      v = v/2;
  }
  return true;
},
/**
 * printing monthly payment 
 */
monthPay: function(p,y,r)
{
     var n=12*y;
     var r=(r/(12*100));
     var payment=(p*r)/(1-Math.pow((1+r),(-n)));
     console.log("the monthly payment is $"+payment);

},
/**
 * finding the secret number using binarysearch 
 */
findNumber: function(low,high)
{
    
		var first = low;
		var  last = high;
		
		if(first == last){
			console.log("Your Number : "+first); 
            console.log("Intermediary Numbers : "+(first-1)+" and "+(first+1));
            return;//to stop recursion here
		}
		
		var  mid = parseInt(Math.floor((first+last))/2);
		
        var  choice = prompt(" Enter 1 : "+first+"-"+mid +"  or " +
                             " Enter 2 : "+(mid+1)+"-"+last +"   ");
		
		if(choice == 1){
			this.findNumber(first, mid);//recursive call of findNumber function
		}
		else if(choice == 2)
			this.findNumber(mid+1, last);

    },

    /*Vending machine*/

    VendingMachine: function(money)
    {
            var  total = 0;
            var index=0;
            var notes=[1000,500,100,50,20,10,5,2,1];
            var money;
            function change(index)
            {
                if(index<notes.length)
                {


                if(money >= notes[index]){
                    
                    var calculate = Math.floor(money/notes[index]);
                    var rem= money%notes[index];
                    money=rem;
                    total = total+calculate;
                    
                    console.log(notes[index]+" Notes of : "+calculate);

                }
                index++;
                change(index);
                } 
            
        }
        change(index);
        console.log("The total number of notes are "+total);
    },
/*Merge sort*/

 
        sort: function(arr,l,r)
        {
            if (l < r) 
        { 
            // Find the middle point 
            var m = Math.floor((l+r)/2); 
  
            // Sort first and second halves 
            this.sort(arr, l, m); 
            this.sort(arr , m+1, r); 
  
            // Merge the sorted halves 
            this.mergeSort(arr, l, m, r); 
        } 
            return arr;
        },
        mergeSort: function(arr,l,m,r)
        {

            { 
                // Find sizes of two subarrays to be merged 
                var n1 = m - l + 1; 
                var n2 = r - m; 
          
                /* Create temp arrays */
                var L= new Array(n1); 
                var R = new Array(n2); 
          
                /*Copy data to temp arrays*/
                for (var i=0; i<n1; ++i) 
                {
                    L[i] = arr[l + i]; 
                }
                for (var j=0; j<n2; ++j) 
                {
                    R[j] = arr[m + 1+ j]; 
                }
          
          
                /* Merge the temp arrays */
          
                // Initial indexes of first and second subarrays 
                var i = 0, j = 0; 
          
                // Initial index of merged subarry array 
                var k = l; 
                while (i < n1 && j < n2) 
                { 
                    if (L[i] <= R[j]) 
                    { 
                        arr[k] = L[i]; 
                        i++; 
                    } 
                    else
                    { 
                        arr[k] = R[j]; 
                        j++; 
                    } 
                    k++; 
                } 
          
                /* Copy remaining elements of L[] if any */
                while (i < n1) 
                { 
                    arr[k] = L[i]; 
                    i++; 
                    k++; 
                } 
          
                /* Copy remaining elements of R[] if any */
                while (j < n2) 
                { 
                    arr[k] = R[j]; 
                    j++; 
                    k++; 
                } 
            } 
        }
    }



















































































