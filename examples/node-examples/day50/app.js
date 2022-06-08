// socket.io uses http & express both 
let app = require("express")();
// connect the express to the http module using Server function
let http = require("http").Server(app);
// load the socket module and connect with http module
let io = require("socket.io")(http);
let port = 9091;

// method that loads one html file that will be available at the client side

app.get('/', (request, response) => { 
    // respond with a client program file
    response.sendFile(__dirname+'/index.html');
});
// io.on('name', callback) is used when client wants to connect to the server
io.on("connection", (socket) => {
   socket.on('message', (data) => {
       // the data needs to be published to all the connected clients
       io.sockets.emit('publish', data);
   })
})
// use http.listen to start the server
http.listen(port, () => console.log(`Server running at ${port}`));

