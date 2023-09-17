const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send('hello everyone auth js')
})

module.exports = route;