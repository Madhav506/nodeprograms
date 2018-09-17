var fs = require('fs')
var prompt = require('prompt-sync')();
fs.readFile('/home/bridgeit/Madhavi_p/nodeprograms/oops/main/address.json', 'utf-8', function(err, data) {
	if (err) throw err
    var info = JSON.parse(data);
    
  var choice=prompt('Enter the choice.1 to create 2 to open 3 to exit   ');

    if(choice == 1)
    {
        console.log(" add your details please..");

        var name1=prompt('Enter your First name ');
        var name2=prompt('Enter your Last name ');
        var number=parseInt(prompt('Enter your phone number '));
        var city=prompt('Enter the city name ');
        var state=prompt('Enter your statename ');
        var zip=prompt('Enter the  zip ');

        info.address.push({
            nameA:name1,
            nameB:name2,
            number1: number,
            city1: city,
            state1:state,
            zip1:zip
        })
        console.log(info);

        fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/oops/main/address.json', JSON.stringify(info), 'utf-8', function(err) {
            if (err) throw err
        })
    }

        if(choice==2){
            console.log("you have opened it.. ");
            var choice1=prompt('Enter the choice 1.Update 2.Sort 3.Search 4.delete 5.Save 6.Exit');
            if(choice1==1)
            {
                obj.update();
            }
            

        }
    
    class addressBook{

        constructor(firstname, lastname,phonenumber,ycity,ystate,yzip) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.phonenumber = phonenumber;
            this.ycity=ycity;
            this.ystate=ystate;
            this.yzip=yzip;
        }
    
        update() {
           // var option1 = prompt('enter the details of person  which you wanted to update ? ');
            var option1=prompt('please select an option which information you wanted to change ? 1.PhoneNumber 2.City 3.State 4.Zip');
            switch(option1){
                case 1:var number=prompt('Enter your phone number');
                continue;
                case 2:var city=prompt('Enter your city ');
                continue;
                case 3:var state=prompt('Enter your state ');
                continue;
                case 4:var zip=prompt('Enter the zip code ');
                break;
                default:console.log("no such option found ");

            }

            for (var i = 1; i <= address; i++) {
        
                info.address.push({
                    "number": number,
                    "city": city,
                    "state": state,
                    "zip": zip
    
                })
    
                console.log(info);
            }

    }
    

      }

      var obj = new addressBook();






   /* var size=prompt('Enter the number of persons address you wanted to add ');
    for(var i=0;i<size;i++){

    var name1=prompt('Enter the name ');
    var phoneNumber=parseInt(prompt('Enter the shares '));
    var address=parseInt(prompt('Enter the  '));
    address.stock.push({
		name:name1,
        share: shares,
        price: price1
	})

    console.log(address);

	fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/oops/main/address.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
    })
}
console.log('Done!');
var stock = address.stock;


for (var key in stock) {
    console.log(stock[key]);
    console.log("            ");
    console.log("The price of " + stock[key].name + " is $" + parseInt(stock[key].share) * parseInt(stock[key].price));
    console.log("            ");
    console.log("            ");
}

console.log("The total value of all stocks is $"+(stock[key].price * stock[key].share + stock[key].price *stock[key].share+ stock[key].price * stock[key].share));

    
var choice=prompt('enter the choice 1 for adding data  or  2 for deleting data');

if(choice==1)//adding the stock
{
    var name1=prompt('Enter the name of stock ');
    var shares=prompt('Enter the shares ');
    var price1=prompt('Enter the price  ');
    
    address.stock.push({
		name:name1,
        share: shares,
        price: price1
	})

    console.log(address);

    //overwriting the file and saving to the json file

	fs.writeFile('/home/bridgeit/Madhavi_p/nodeprograms/oops/utility/management.json', JSON.stringify(address), 'utf-8', function(err) {
        if (err) throw err
        return;
    })

}
else if(choice==2)
{
delete address.stock[0];//deleting the stock
fs.writeFile('/home/bridgeit/Madhavi_p/nodeprograms/oops/utility/management.json', JSON.stringify(address), 'utf-8', function(err) {
    if (err) throw err
    console.log(address);
})

}
*/
})