
let readline = require('readline-sync');
let writer = require('./empfs').writeEmployee;
let empId = readline.questionInt("Enter id: ");
let empName = readline.question("Enter name: ");
let empSalary = readline.questionFloat("Enter salary: ");
let emp = {id: empId, name: empName, salary: empSalary}
writer(emp);
