const fs = require('fs');

let rawdata = fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/oops/utility/inventory.json');  
let data = JSON.parse(rawdata);  
console.log(data);  
