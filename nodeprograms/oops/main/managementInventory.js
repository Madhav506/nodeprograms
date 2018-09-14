/******************************************************************************
 *  Execution       :   4. default node         cmd> node managementInventory.js 
 * 
 *  Purpose         :  calculating the value of each stock and total value and reading data to json file
 *  @description    
 * 
 *  @file           : stock.js
 *  @overview       : calculating the value of each stock and total value and reading data to json file
 *  @author         : Madhav506 <madhavipasupuleti506@gmail.com>
 *  @version        : 1.0
 *  @since          : 12-09-2018.
 *
 ******************************************************************************/
var fs = require('fs')
var prompt = require('prompt-sync')();


fs.readFile('/home/bridgeit/Madhavi_p/nodeprograms/oops/utility/management.json', 'utf-8', function(err, data) {
	if (err) throw err

    var arrayOfObjects = JSON.parse(data);
    var size=prompt('Enter the number of stock you want ');
    for(var i=0;i<size;i++){

    var name1=prompt('Enter the name of stock ');
    var shares=parseInt(prompt('Enter the shares '));
   
    var price1=parseInt(prompt('Enter the price  '));

    
    arrayOfObjects.stock.push({
		name:name1,
        share: shares,
        price: price1
	})

    console.log(arrayOfObjects);

	fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/oops/utility/management.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
    })
}
console.log('Done!');
var stock = arrayOfObjects.stock;



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
    
    arrayOfObjects.stock.push({
		name:name1,
        share: shares,
        price: price1
	})

    console.log(arrayOfObjects);

    //overwriting the file and saving to the json file

	fs.writeFile('/home/bridgeit/Madhavi_p/nodeprograms/oops/utility/management.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err
        return;
    })

}
else if(choice==2)
{
delete arrayOfObjects.stock[0];//deleting the stock
fs.writeFile('/home/bridgeit/Madhavi_p/nodeprograms/oops/utility/management.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
    if (err) throw err
    console.log(arrayOfObjects);
})

}

})