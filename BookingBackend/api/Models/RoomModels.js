const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    Maxperople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
},
    { timestamps: true }
)

module.exports = mongoose.model("Rooms", RoomSchema);