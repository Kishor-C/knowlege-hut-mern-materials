let express = require('express');
let app = express();
let port = 9091;

app.listen(port, () => console.log(`Server started at ${port}`));

app.post("/store/:id/:name/:salary", (request, response) => { 
    // reading id, by default path parameters will be in string
    let empId = parseInt(request.params.id);
    let empName = request.params.name;
    let empSalary = request.params.salary;
    let emp = {id : empId, name : empName, salary : empSalary};
    response.json(emp); 
});
app.get("/fetch/:id", (request, response) => {
    let id = parseInt(request.params.id);
    response.json({message: `Fetching ${id} details`});
});