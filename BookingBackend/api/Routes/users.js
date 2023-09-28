const express = require('express');
const route = express.Router();
const User = require('../Models/UserModels');
const createError = require('../Utils/error')


//UPDATE
route.put("/:id", async (req, res) => {
    try {
        const UpdateUser = await User.findByIdAndUpdate(req.params.id,
            { $set: req.body }, { new: true })
        res.status(200).json(UpdateUser)
    } catch (e) {
        res.status(500).json(e);
    }
})
// Delete
route.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted succesfully")
    } catch (e) {
        res.status(500).json(e);
    }
})
//GET
route.get("/:id", async (req, res) => {
    try {
        const userUser = await User.findById(req.params.id);
        res.status(200).json(userUser)
    } catch (e) {
        res.status(500).json(e);
    }
})

//GET ALL
route.get("/", async (req, res, next) => {
    try {
        const userUser = await User.find();
        res.status(200).json(userUser)
    } catch (e) {
        next(e)
    }
})

module.exports = route;