module.exports=class Bank{
    constructor(){
        this.balance=10000;
        this.persons=[];
        this.count=0;
    }
    queue(p){
        this.persons.push(p);
        this.count++;
    }
    dequeue(){
        this.persons.shift();
        this.count--;
    }
    cashdeposit(readlinesyc){
            var amnt=readlinesyc.question("enter the amount you want to deposit ");
            if(isNaN(amnt)){
                console.log("inavlid input,try again")
                this.cashdeposit(readlinesyc);
            }
            this.balance+=parseInt(amnt);
            //console.log("Balance after deposit is "+this.balance)
    }
        withdraw(readlinesync){
            var amnt=readlinesync.question("enter amount you want to withdraw ");
             if(isNaN(amnt)){
                console.log("inavlid input,try again")
                this.withdraw(readlinesyc);
            }
            if(amnt<this.balance){
                console.log("insufficient balance :( ")
            }
            this.balance-=parseInt(amnt);
             //console.log("Balance after withdrawal  is "+this.balance)
        }
        checkbalance(){
            console.log("The balance is "+this.balance);
        }
        isEmpty(){
            return this.count;
        }
    }
    
    