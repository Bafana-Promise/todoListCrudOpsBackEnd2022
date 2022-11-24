const url = "mongodb+srv://Bafana:PRO123@currency.0huohhr.mongodb.net/todo";

const mongoose = require('mongoose');

mongoose.connect(url, (err) => {
    if (!err) {
        console.log("Connection was successful")
    } else {
        err
    }
})

module.exports = mongoose