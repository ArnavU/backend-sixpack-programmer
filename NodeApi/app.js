import express from "express";
import mongoose from "mongoose";

const app = express();
const router = express.Router();



// using middleware
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi",
})
.then(()=> console.log("Database connected"))
.catch((e) => console.log(e));

const schema = new mongoose.Schema({
    name: String, 
    email: String,
    password: String,
})

const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
    res.send("Nice working")
})

app.get("/users/all", async (req, res) => {
    const users = await User.find({});

    res.json({
        success: true,
        users
    })
})

// accessing queries
app.get("/users/queries", async (req, res) => {
    console.log(req.query);
    console.log(req.query.name);

    res.json(req.query);
})

app.post("/users/new", async (req, res) => {

    const {name, email, password } = req.body;

    await User.create({
        name, email, password, 
    })

    res.status(201).cookie("acookie", "cookiename").json({
        success: true,
        message: "Registered Successfully",
    })
})

app.post('/userid', async (req, res) => {
    const {id} = req.body;
    const user = await User.findById(id);

    res.json({
        success: true,
        user
    })
})

// taking params in the route
app.get("/id/:id/name/:name/age/:age", async (req, res) => {
    const {id} = req.params;

    const params = req.params;
    console.log(params);
    res.json(params);
})

app.listen(4000, ()=> {
    console.log("Server is running at port 4000");
})