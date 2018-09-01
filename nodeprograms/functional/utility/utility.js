const _ = require('lodash');
var prompt = require('prompt-sync')();

module.exports = {
/**
 * 1.display a string with username
 */
hello: function(name){ 


    if(isNaN(name))
    /**
    *determines whether a value is not a 
    */
    {
    /*checks whether the length of the string is min 3 characters*/

   if(name.length<3)
  
   {
        console.log("Username should be atleast 3 characters");
    }
    
    else{
    
    console.log("Hello ,"+name+" how are you ?");

}
}
else{
    console.log("enter only string");
}
}
,

/*2. flipping the coin and calculating the percentage of heads and tails*/
flipcoin:  function(numberofflips){

    var headcount=0 , tailscount=0;

    if(numberofflips<1)
    {
        console.log("positive integer should be given");
    }
    else{
    
        /*iterating a loop until index becomes greater than number of flips*/
        for(var index=0;index<numberofflips;index++) {
       
        /*random function to get value between 0 and 1 ,it generates a random number*/
        if(Math.random()>0.5)
        {
            headcount++;/*count the number of heads*/
        }
        else
        {
            tailscount++;/*count the number of tails*/
        }
    }
        console.log("heads: "+headcount);/*prints the headcount*/
        console.log("tails: "+tailscount);/*prints the tailscount*/
        console.log("percentage of heads = "+((headcount)/numberofflips)*100+"%");
        console.log("percentage of tails = "+((tailscount)/numberofflips)*100+"%");

    }
} ,

/*3. A function to check whether the given year is leap year or not*/

leapyear: function(year)
    {
/*condition to check whether the given year is atleast 4 digits*/
        if(year.length>=4)
        {
        if((year%4==0) && (year%100!=0)|| (year%400==0) )
        {
      console.log(year+ " is a leap year");
        }
        else 
        {
            console.log(year +" is not a leap year");
        }
    }
    else{
        console.log("Enter a valid year,please re-enter it")
    }
    },

 /*4. A function which calculates powers of 2 */
 power: function(powerN){

/*this condition prints invalid if power less than 0*/
    if(powerN<=0)
    {
        console.log("invalid input you have given");
    }
/*this condition prints when int overflows */

    else if(powerN>31)
    { 
        console.log("overflow occured,please re-enter");
    }

    else
    /* loop iterates until power becomes greater than i
     */
    for(var i=1;i<=powerN;i++)
    { var value=2;
        for(var j=1;j<i;j++)
            value*=2;
                console.log("2^"+i+"="+value);
    }

    },

/*5. a function harmonic takes term and calculates its value*/
harmonic: function(term){

   var a=1;

/*loop iterates until i becomes greater than given term*/
   for(var i=1;i<=term;i++)
{
   a*=i;/*calculates denominator value*/
}
   var b=0;
   for(var j=1;j<=term;j++)
   {
     b=b+a/j;/*calculates numerator value*/
   }
   
   console.log("the value of harmonic term "+term +" is " + b+"/" +a);
},

/*6. a function to calculate prime factors of a number*/
prime: function(number){  

/*Print the number of 2s that divide given number*/
     while(number%2==0)
    {
        console.log(2);//print 2s
        number=number/2;
    }

 /*n would be odd at this point.  So we can
  *skip one element then i = i +2 done 
  * to reduce number of iterations
  **/

 /*loop iterates until  i becomes greater than squareroot of the number*/
    for(var i=3;i<=Math.sqrt(number);i=i+2){

/*While i divides n, print i and divide n*/
        while(number%i==0)
        {
            console.log(i);//prints factor
            number=number/i;
        }
    }

    /*
    *This condition is to handle the case when
    *n is a prime number greater than 2
    ***/
    if(number>2)
        {
            console.log(number);//prints other factor
        }
    

},

/*7. a function to print the stake ,goal and the number of times to play*/
gambler: function(stake,goal,numberoftimes){

    var wins = 0;loss=0;

    /*condition to check whether the stake is greater than goal or not*/
    
    if(stake>goal){
    console.log("please remind that goal should be greater than stake");
    }
		
        else if(stake>0 ||stake==goal ) 
        {
            /*loop iterates until index becomes greater than numberoftimes played*/
            for(var index=0;index<numberoftimes;index++) {

				if(Math.random()>0.5){
                    stake++; //win logic
                    wins++;
                } 
                else 
                {
                    stake--;//lost
                    loss++;
                }
			}
            
        console.log("Number of wins : "+wins);/*prints number of times won*/
        console.log("Number of times lost : "+loss);/*prints number of times lost the game*/

        console.log("Percentage of wins : "+(wins*100)/numberoftimes+"%");
        console.log("Percentage of loss : "+(100-((wins*100)/numberoftimes))+"%");
        }
    },


/*8. A function to calculate number of distinct coupons*/
coupon: function(min,max){

    var random= [];//creating array
    var elements;

    /*loop iterates until index becomes greater than given max value*/
    for(var index=parseInt(min);index<parseInt(max);index++)
    {
        /*values between those given min and max values assigned to elements
        * underscore.js is a javascript library in lodash library 
        * in node.js helps us to work with arrays,objects
        */ 
        elements=_.random(parseInt(min),parseInt(max));
       
        random.push(elements);/*push the elements to random array*/
    }
    console.log(random);/*prints elements in random array*/

    console.log("no. of coupons generated= "+random.length);

    /*set eliminates the duplicate values from that userset array or allow to create collections of unique values.*/ 
    var userSet= new Set(random);

    console.log("distinct coupons are : ("+[...userSet]+")");

    console.log("number of distinct coupons are :"+[...userSet].length);
  
},

/*9. a function to print 2d array*/
array: function(rows){

    var arr=new Array(rows);//create array of rows

    var columns=prompt("Enter number of columns : ");
    for(var i=0;i<rows;i++)
    {
        arr[i]= new Array(columns);//create array of columns

        for(var j=0;j<columns;j++)
        {
            arr[i][j]=prompt('Enter the element : ');/*prompt sync used to give input elements to array*/
        }
    }
    console.log(arr);//prints the array
},

/*10. A function to calculate triplets that gives sum zero*/
triplets: function(rows)
{
    var arr = new Array(rows);/*creates an array for row*/
    var array1=new Array();/*creating empty array*/

    for(var index=0;index<rows;index++)/*loop for entering the elements to */
    {
        arr[index]=prompt('Enter the element : ');/*entering the  elements in to row */
    } 
    for(var i=0;i<(arr.length-2);i++) { 

        for(var j=i+1;j<(arr.length-1);j++){

            for(var k=j+1;k<arr.length;k++){
                var sumofIntegers= Number(arr[i])+Number(arr[j])+Number(arr[k]);//number for type conversion
                if(sumofIntegers==0)
                {
                    array1.push(arr[i]+' '+arr[j]+' '+arr[k]);//pushing array elements to array1
                }
    }
  }
}
function removeDuplicates(arr){
    var unique=[];
    for(var i=0;i< arr.length;i++)
    {
        if(unique.indexOf(arr[i])== -1){
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(array1));
console.log(removeDuplicates(array1).length);
}
,

/*11. A function to calculate distance between center and given coordinates*/
distance: function(x,y)
{
    var c=Math.pow(Math.pow(x,2)+Math.pow(y,2),(1/2));//c=(x)

    console.log("The euclidean distance from ("+x+","+y+") to (0,0) is "+c);

},

/*12. permute function perform permutations of string*/
permute: function(strArray,firstindex,endindex)
{
    if(firstindex==endindex)
    {
    /*joins elements of splitted array into a string and returns the string*/

        console.log(strArray.join(''));    }
    else{
        for(var i=firstindex;i<=endindex;i++)
        {
            this.swap(strArray,firstindex,i);
            this.permute(strArray,firstindex+1,endindex);
            //console.log(strArray);
            this.swap(strArray,i,firstindex);
        }
    }
},

/*swap function to swap the elements in a string*/
swap: function(strArray,index1,index2)
{
    var temp = strArray[index1];
    strArray[index1]=strArray[index2];
    strArray[index2]=temp;
    return strArray;//returns the string after swapping
},

/*13. function getTime to get system time*/
getTime: function() {

    var date=new Date();// creates a new date object with current date and time
    return date.getTime();//returns the time 

},
stopWatch: function(startTime,stopTime)
{
    var elapseTime = stopTime-startTime;/*elapsetime is difference between stop and starttime*/
    console.log("the elapsed time is "+elapseTime+" milliseconds");

    console.log("the elapsed time is "+elapseTime/1000+" seconds");
}
,
/*15. quadratic roots to be determined*/
quadratic: function(a,b,c){

    var determinant=b*b-(4*a*c);
    var root1,root2;

    /*condition for real and different roots*/
    if (determinant > 0)
    {
        /*Math.sqrt() function to calculate squareroot*/
        root1 = (-b+Math.sqrt(determinant))/(2*a);
        root2 = (-b-Math.sqrt(determinant))/(2*a);
        console.log("roots are  "+root1 +" and " +root2);
    }

    //condition for real and equal roots
    else if (determinant == 0)
    {
        root1 = root2 = -b/(2*a);

        console.log("roots are ", +root1);
    }

    // if roots are not real 
    else
    {
       var  realPart = -b/(2*a);
       var  imaginaryPart = Math.sqrt(-determinant)/(2*a);
        console.log("roots are "+ realPart+"+"+imaginaryPart+"i"+","+ realPart+"-"+imaginaryPart+"i");
    }

    return 0;
}   
,

/* 16. windchill function to calculate the temperatures*/ 
windchill: function(t,v)
{
var w = (35.74+0.6215*t)+(0.4275*t-35.75)*(Math.pow(v,0.16));
if(t>50 || v>120 ||v<3)
{
    console.log("formula is not valid for above conditions");
}
else
console.log("w = "+w);

}
}