// import http module
let http = require("http");
// import the url module
let url = require("url");
// define a port number
let port = 9091
// server instance & starting it 
http.createServer((request, response) => {
    let urlText = request.url;
    // creating the url object
    let urlObject = url.parse(urlText, true);
    // extract the query parameter
    let param = urlObject.query;
    if(urlText !='/favicon.ico') {
        console.log(urlText);
        response.writeHead(200, {'content-type': 'text/html'});
        response.write('<h1>We are using nodemon to launch the app</h1>');
        response.write(`<h3>Name: ${param.name}, Age: ${param.age}</h3>`)
        response.end();
    }
}).listen(port, () => 
    console.log(`Server running at ${port}`));

