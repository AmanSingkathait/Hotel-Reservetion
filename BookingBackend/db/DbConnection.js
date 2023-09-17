const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const DBurl = "mongodb://localhost:27017/"

const connectMongoDB = () => {
    const establishConnection = async () => {
        try {
            await mongoose.connect(DBurl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("connection has been stablish sussusfully ")
        } catch (error) {
            console.log(`Failed to connect with Database ${error}`)
        }
    };
    establishConnection();
}

module.exports = connectMongoDB;
