var fs = require('fs');
var rawdata = fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/oops/utility/stock.json');
var data = JSON.parse(rawdata);
console.log(data);
var stock = data.stock;
console.log("            ");0

console.log("STOCK REPORT");
console.log("----------------");
console.log("            ");


for (var key in stock) {
    console.log(stock[key]);
    console.log("            ");
    console.log("The price of " + stock[key].name + " is $" + stock[key].share * stock[key].price);
    console.log("            ");
    console.log("            ");
}
//console.log("The value of "+stock[0].name+" is $"+stock[0].share * stock[0].price);    console.log("            ");

//console.log("The value of "+stock[1].name+" is $"+stock[1].share * stock[1].price);    console.log("            ");

//console.log("The value of "+stock[2].name+" is $"+stock[2].share * stock[2].price);    console.log("            ");


console.log("The total number of shares is "+(stock[0].share+ stock[1].share+ stock[2].share));console.log("            ");


console.log("The total value of all stocks is $"+(stock[0].price * stock[0].share + stock[1].price *stock[1].share+ stock[2].price * stock[2].share));

console.log("            ");
console.log("            ");
