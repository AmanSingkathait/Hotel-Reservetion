const express = require('express');
const route = express.Router();
const Rooms = require('../Models/RoomModels');
const Hotel = require('../Models/HotelsModels');
const createError = require('../Utils/error');
const { verifyAdmin, } = require('../Utils/VerifyToken')


route.post("/:hotelid", verifyAdmin, async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Rooms(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
})


route.put("/:id", verifyAdmin, async (req, res, next) => {
    try {
        const UpdateRoom = await Rooms.findByIdAndUpdate(req.params.id,
            { $set: req.body }, { new: true })
        res.status(200).json(UpdateRoom)
    } catch (e) {
        res.status(500).json(e);
    }
})
// TODO --> route request 
route.put("availability/:id", async (req, res, next) => {
    try {
        await Rooms.updateOne(
            { "roomNumbers._id": req.params.id },
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                },
            }
        );
        res.status(200).json("Room status has been updated.");
    } catch (err) {
        next(err);
    }
})

route.delete("/:id/:hotelid", verifyAdmin, async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Rooms.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json("Room has been deleted.");
    } catch (err) {
        next(err);
    }
})


//GET
route.get('/:id', verifyAdmin, async (req, res) => {
    try {
        const userRoom = await Rooms.findById(req.params.id);
        res.status(200).json(userRoom)
    } catch (e) {
        res.status(500).json(e);
    }
})

route.get('/', verifyAdmin, async (req, res, next) => {
    try {
        const userRooms = await Rooms.find();
        res.status(200).json(userRooms)
    } catch (e) {
        next(e)
    }
})
module.exports = route;