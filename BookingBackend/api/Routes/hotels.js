const express = require('express');
const route = express.Router();
const Hotel = require('../Models/HotelsModels');
const createError = require('../Utils/error')
const { verifyAdmin } = require('../Utils/VerifyToken');

//CREATE 
route.post("/", verifyAdmin, async (req, res) => {
    const newHotel = new Hotel(req.body);
    try {
        const userhotel = await newHotel.save();
        res.status(200).json(userhotel)
    } catch (error) {
        res.status(500).json(error)
    }
})
//UPDATE
route.put("/:id", verifyAdmin, async (req, res) => {
    try {
        const UpdateUser = await Hotel.findByIdAndUpdate(req.params.id,
            { $set: req.body }, { new: true })
        res.status(200).json(UpdateUser)
    } catch (e) {
        res.status(500).json(e);
    }
})
// Delete
route.delete("/:id", verifyAdmin, async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("hotel has been deleted successfully")
    } catch (e) {
        res.status(500).json(e);
    }
})
//GET
route.get("/find/:id", async (req, res) => {
    try {
        const userhotel = await Hotel.findById(req.params.id);
        res.status(200).json(userhotel)
    } catch (e) {
        res.status(500).json(e);
    }
})

//GET ALL
// route.get("/", async (req, res, next) => {
//      const failed = true;
//     if (failed) return next(createError(401, "you are not authanticate"));
//     try {
//         const userhotel = await Hotel.find();
//         res.status(200).json(userhotel)
//     } catch (e) {
//         next(e)
//     }
// })

// localhost:2000/api/hotels?featured=false&min=1000&max=3000

route.get("/", async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const userhotel = await Hotel.find({ ...others, leastPrice: { $gt: min | 999, $lt: max ||3999 } });
        res.status(200).json(userhotel)
    } catch (e) {
        next(e)
    }
})

route.get('/CountByCity', async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city })
        }))
        res.status(200).json(list)
    } catch (e) {
        next(e)
    }
})
route.get('/CountByType', async (req, res, next) => {
    try {
        const hotelcount = await Hotel.countDocuments({ type: "hotel" })
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" })
        const resortCount = await Hotel.countDocuments({ type: "resort" })
        const villaCount = await Hotel.countDocuments({ type: "villa" })
        const cabinCount = await Hotel.countDocuments({ type: "cabin" })
        res.status(200).json([
            { type: "hotel", count: hotelcount },
            { type: "apartment", count: apartmentCount },
            { type: "resort", count: resortCount },
            { type: "villa", count: villaCount },
            { type: "cabin", count: cabinCount }
        ])
    } catch (error) {
        next(error)
    }
})

module.exports = route;