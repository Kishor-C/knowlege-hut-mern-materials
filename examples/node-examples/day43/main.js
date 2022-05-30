// importing the fs module
let fs = require("fs");
// content to write
let content = "Hello content\n";
// writing the file content using writeFileSync
fs.writeFileSync("simple.txt", content, {flag : "a+"});
console.log('********* DONE **********');