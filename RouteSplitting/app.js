import express from "express";
import userRouter from "./routes/user.js"
import { User } from "./models/user.js";
import {config} from 'dotenv';

export const app = express();

config({
    path: "./data/.env",
});



// using middleware
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.send("Nice working")
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
