let express = require("express");
let parser = require("body-parser");
let app = express();
let port = 9093;

// middleware to parse json
app.use(parser.json());
app.listen(port, () => console.log(`Express running in ${port}`));

// temporary database
let emps = [];
// storing data
app.post('/employee', (request, response) => {
    // read request.body, assuming we are sending {"id":.., "name":..., "salary":...}
    let body = request.body;
    emps.push(body);
    response.json({content: `Id: ${body.id}, Name: ${body.name}, Salary: ${body.salary}`})
});
// fetch all employees
app.get("/employee", (request, response) => {
    response.json(emps);
});
// fetch employee by id
app.get("/employee/:id", (request, response) => { 
    let id = parseInt(request.params.id);
    let found = false;
    for(let index = 0; index < emps.length; index++) {
        if(id === emps[index].id) {
            found = true;
            response.json(emps[index]);
        }
    }
    if(found == false) {
        response.json({message: `Employee with an id ${id} is not found!`})
    }
});
