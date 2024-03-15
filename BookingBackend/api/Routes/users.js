const express = require('express');
const route = express.Router();
const User = require('../Models/UserModels');
const createError = require('../Utils/error')
const { verfyToken, verfyUser, verifyAdmin } = require('../Utils/VerifyToken')

// verify token 
route.get('/CheckAuthantication', verfyToken, (req, res, next) => {
    res.status(200).json(req.user);
})

// check user
route.get('/CheckUser/:id', verfyUser, (req, res, next) => {
    res.status(200).send("Hello login user you can delete your account now ")
})

// check Admin 
route.get('/CheckAdmin/:id', verifyAdmin, (req, res, next) => {
    res.status(200).send("hello admin how are you  ")
})


//UPDATE
route.put("/:id", verfyUser, async (req, res) => {
    try {
        const UpdateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(201).json({ message: "Update Successfull", data: UpdateUser })
    } catch (e) {
        res.status(500).json(e);
    }
})
// Delete
route.delete("/:id", verfyUser, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted succesfully")
    } catch (e) {
        res.status(500).json(e);
    }
})
//GET
route.get("/:id", verfyUser, async (req, res) => {
    try {
        const userUser = await User.findById(req.params.id);
        res.status(200).json(userUser)
    } catch (e) {
        res.status(500).json(e);
    }
})

route.get("/findingUser/:id",async (req,res)=>{
    try {
        const userUser = await User.findById(req.params.id);
        console.log(userUser)
        res.status(200).json(userUser)
    } catch (e) {
        res.status(500).json(e);
    }
})

//GET ALL
route.get("/", verifyAdmin, async (req, res, next) => {
    try {
        const userUser = await User.find();
        res.status(200).json(userUser)
    } catch (e) {
        next(e)
    }
})

module.exports = route;