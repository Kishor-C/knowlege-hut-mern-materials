let fs = require('fs');
let obj = {name : "Raj", age : 35};
fs.writeFileSync('demo.json', obj);