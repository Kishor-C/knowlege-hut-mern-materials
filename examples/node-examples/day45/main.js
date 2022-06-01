// import http module
let http = require("http");
// create a variable to represent port number
const port = 8181;
// create the server instance
let server = http.createServer((req, res) => {
    res.write('Welcome to web app!');
    res.end(); // ends content writing in the response and returns the response to client
});
// start the server using listen
server.listen(port, () => console.log(`Server started at ${port}`));
