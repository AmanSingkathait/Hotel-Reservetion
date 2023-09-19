const express = require('express');
const route = express.Router();
const Hotel = require('../Models/HotelsModels');
const createError = require('../Utils/error')

//CREATE 
route.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body);
    try {
        const userhotel = await newHotel.save();
        res.status(200).json(userhotel)
    } catch (error) {
        res.status(500).json(error)
    }
})
//UPDATE
route.put("/:id", async (req, res) => {
    try {
        const UpdateUser = await Hotel.findByIdAndUpdate(req.params.id,
            { $set: req.body }, { new: true })
        res.status(200).json(UpdateUser)
    } catch (e) {
        res.status(500).json(e);
    }
})
// Delete
route.delete("/:id", async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("hotel has been deleted succesfully")
    } catch (e) {
        res.status(500).json(e);
    }
})
//GET
route.get("/:id", async (req, res) => {
    try {
        const userhotel = await Hotel.findById(req.params.id);
        res.status(200).json(userhotel)
    } catch (e) {
        res.status(500).json(e);
    }
})

//GET ALL
route.get("/", async (req, res, next) => {
    // const failed = true;
    // if (failed) return next(createError(401, "you are not authanticate"));
    try {
        const userhotel = await Hotel.find();
        res.status(200).json(userhotel)
    } catch (e) {
        next(e)
    }
})

module.exports = route;