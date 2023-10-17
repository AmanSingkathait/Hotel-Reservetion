const express = require('express');
const dotenv = require('dotenv');
const connectMongoDB = require('./db/DbConnection');
const authRoute = require('./api/Routes/auth')
const usersRoute = require('./api/Routes/users');
const hotelsRoute = require('./api/Routes/hotels');
const roomRoute = require('./api/Routes/room');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const User = require('../BookingBackend/api/Models/UserModels')

const app = express();
const port = process.env.PORT || 2000;

dotenv.config(); // config file to hide importent document

app.get("/", (req, res) => {
    res.send("hello everyone")
})

// ---> middleware 
app.use(cors());
app.use(cookieParser());
app.use(express.json())

// --> using the middleware
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomRoute);


app.use((err, req, res, next) => {
    const errorstatus = err.status || 500
    const errormessage = err.message || "something went wrong!"
    return res.status(errorstatus).json({
        success: false,
        status: errorstatus,
        message: errormessage,
        stack: err.stack
    })
})

app.listen(port, () => {
    connectMongoDB(); // connect with mongodb
    console.log(`listening at the port ${port}`)
})