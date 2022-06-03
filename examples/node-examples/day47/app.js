let express = require("express");
let app = express();
let port = 9092;

app.listen(port, () => console.log(`Services are running in ${port}`));

app.get("/", (request, response) => {
    let msg = {message: "Hello Everyone this is GET method"};
    response.json(msg);
});

app.post("/", (request, response) => {
    let msg = {message: "Hello Everyone this is POST method"};
    response.json(msg);
});