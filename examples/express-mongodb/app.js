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
// storing the records /user
app.post("/user", (request, response) => {
    mongoClient.connect(dbUrl, {useNewUrlParser:true}, (err, client) => {
        if(err) throw err;
        let data = request.body;
        let db = client.db("mydb");
        db.collection("user").insertOne(data, (err, res) => {
            client.close();
            if(err) {
                response.status(404).json({"message":"User failed to store"});
            }
            else {
                response.status(201).json(res);
            } 
        });
    });
});
// getting the user by id
app.get("/user/:id",(req,res)=>{
    mongoClient.connect(dbUrl,{useNewUrlParser:true},(err,client)=>{
        if(err) throw err;
        let id = parseInt(req.params.id);
        let db = client.db('mydb');
        let document=db.collection("user").find({_id:id});
        let user=undefined;
        document.forEach((doc,err)=>{
            if(err)throw err;
            user = doc;
        },()=>{
            client.close();
            if(user == undefined){
                res.json({msg:`User with id ${id} not found !!`});
            }else{
                res.json(user);
            }
        })
    })
});
// updating the user age by id
app.put("/user/:id/:age", (request, response) => {
    let id = parseInt(request.params.id);
    let age1 = parseInt(request.params.age);
    mongoClient.connect(dbUrl,{useNewUrlParser:true},(err,client)=>{
        if(err) throw err;
        else {
            let db = client.db("mydb");
            db.collection("user").updateOne({_id:id}, {$set:{age:age1}}, (err, res) => {
                client.close();
                if(err) throw err;
                response.json(res);
            });
        }
    });
});