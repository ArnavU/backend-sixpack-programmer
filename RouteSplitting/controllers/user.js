import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
    const users = await User.find({});

    res.json({
        success: true,
        users
    })
}

export const register = async (req, res) => {
    const {name, email, password } = req.body;

    await User.create({
        name, email, password, 
    })

    res.status(201).cookie("acookie", "cookiename").json({
        success: true,
        message: "Registered Successfully",
    })
}

export const getUserQueries = async (req, res) => {
    console.log(req.query);
    console.log(req.query.name);

    res.json(req.query);
}