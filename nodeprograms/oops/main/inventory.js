
var fs = require('fs');
var rawdata = fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/oops/utility/inventory.json');
var data = JSON.parse(rawdata);
console.log(data);
var rice = data.rice;
var pulses = data.pulses;
var wheat = data.wheat;

console.log("Rice");
console.log("----------------");
console.log("            ");


for (var key in rice) {
    console.log(rice[key]);
    console.log("            ");
    console.log("The price of " + rice[key].name + " is Rs." + rice[key].weight * rice[key].price);
    console.log("            ");
    console.log("            ");
}
console.log("The total weight of rice is "+(rice[0].weight+ rice[1].weight+ rice[2].weight)+"kg");console.log("            ");


console.log("The total price of rice is "+(rice[0].price+ rice[1].price+ rice[2].price)+"rupees");

console.log("            ");
console.log("            ");

console.log("Pulses");
console.log("----------------");
console.log("            ");



for (var key in pulses) {
    console.log(pulses[key]);
    console.log("            ");
    console.log("The price of " + pulses[key].name + " is Rs." + pulses[key].weight * pulses[key].price);
    console.log("            ");
    console.log("            ");
}
console.log("The total weight of pulses is "+(pulses[0].weight+ pulses[1].weight+ pulses[2].weight)+"kg");console.log("            ");


console.log("The total price of pulses is "+(pulses[0].price+ pulses[1].price+ pulses[2].price)+"rupees");
console.log("            ");
console.log("            ");

console.log("Wheat");
console.log(" ----------------");
console.log("            ");



for (var key in wheat) {
    console.log(wheat[key]);
    console.log("            ");
    console.log("The price of " + wheat[key].name + " is Rs." + wheat[key].weight * wheat[key].price);
    console.log("            ");
    console.log("            ");
}

console.log("The total weight of wheat is "+(wheat[0].weight+ wheat[1].weight+ wheat[2].weight)+"kg");console.log("            ");


console.log("The total price of wheat is "+(wheat[0].price+ wheat[1].price+ wheat[2].price)+"rupees");
