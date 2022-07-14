let app = require("express")();
let port = 3001;
let parser = require("body-parser");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let dbUrl = "mongodb://localhost:27017";

// run the server
app.listen(port, () => console.log(`Server is running at ${port}`));

// body-parser and cors
app.use(parser.json());
app.use(cors());

// retreiving all the records /user
app.get("/user", (request, response) => {
    mongoClient.connect(dbUrl, {useNewUrlParser:true}, (err, client) => {
        if(err) {
            throw err;
        } else {
            //use the database name
            let db = client.db("mydb");
            // retrieve all the documents
            let documentsCursor = db.collection("user").find();
            let user = [];
            // forEach is used to iterate the document, forEach(iteration, endOfIteration)
            documentsCursor.forEach((doc, err) => {
                if(err) throw err;
                user.push(doc); 
            }, () => {
                client.close();
                response.json(user);
            });
        }
    });
    
});