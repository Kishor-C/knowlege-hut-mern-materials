let fs = require('fs');
function writeEmployee(emp) {
    console.log(emp);
    if(checkFileExists) {
        let jsArr = readEmployee();
        jsArr.push(emp);
        let jsonString = JSON.stringify(jsArr);
        fs.writeFileSync('emp.json', jsonString);
        console.log('Number of data written: '+jsArr.length);
    }
}
function readEmployee() {
    if(checkFileExists) {
        let dataString = fs.readFileSync("emp.json").toString();
        // convert to Javascript object to add the new object
        let jsArr = JSON.parse(dataString);
        return jsArr;
    }
}
function checkFileExists() {
    if(!fs.existsSync("emp.json")) {
        // create an array
        let arr = [];
        let arrString = JSON.stringify(arr);
        fs.writeFileSync("emp.json", arrString);
    }
    return true; 
}
module.exports = {writeEmployee, readEmployee}