const express = require('express');
var bcrypt = require('bcryptjs');
const createError = require("../Utils/error");
const User = require('../Models/UserModels')
const jwt = require('jsonwebtoken');

const route = express.Router();

route.post('/register', async (req, res, next) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            Username: req.body.Username,
            email: req.body.email,
            password: hash
        })
        const savedUser = await newUser.save();
        console.log('User created:', savedUser);
        res.status(201).send("User has been created")
    } catch (err) {
        next(err)
    }
})
route.post('/LoginUser', async (req, res, next) => {
    try {
        const userdata = await User.findOne({ username: req.body.username });
        if (!userdata) {
            return next(createError(404, "User not found"))
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, userdata.password);
        if (!isPasswordCorrect) {
            return next(createError(404, "Incorrect credentials"))
        }
        const token = jwt.sign({ id: userdata._id, isAdmin: userdata.isAdmin }, process.env.JWT_SECRET);

        const { password, isAdmin, ...otherDetails } = userdata._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ details: { ...otherDetails }, isAdmin });
    } catch (e) {
        next(e)
    }
})

module.exports = route;