let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/", (request, response) => { 
    response.sendFile(__dirname+"/index.html");
});

io.on("connection", (socket) => {
    // recieve a user object
    socket.on('username', (user) => {
        socket.emit('un', user);
    });
    socket.on('message', (obj) => {
        io.sockets.emit('publish', obj);
    });
});
http.listen(9091, () => console.log("Server is running at 9091"));