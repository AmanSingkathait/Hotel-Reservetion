const express = require('express');
const createError = require("../Utils/error");
const User = require('../Models/UserModels')
const route = express.Router();

route.post('/register', async (req, res, next) => {
    try {
        const newUser = new User({
            Username: req.body.Username,
            email: req.body.email,
            password: req.body.password,
        })
        const savedUser = await newUser.save();
        console.log('User created:', savedUser);
        res.status(201).send("User has been created")
    } catch (err) {
        next(err)
    }
})

module.exports = route;