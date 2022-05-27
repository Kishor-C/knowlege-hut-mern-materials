// importing the calculator
let c = require('./util');
// importing dbOperations
let db = require('./util2').dbOperation;
// c is by default imports calculator
let r = c.add(2, 3);
console.log(`Result = ${r}`);
r = c.sub(3, 1);
console.log(`Result = ${r}`);

// db is importing dbOperations
db.store();
db.fetch();


