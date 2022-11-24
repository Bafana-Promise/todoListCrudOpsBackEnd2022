// Imported Mongoose 
const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    // },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: () => new Date()
    },
    task: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

// I have exported the model
// The first arguement is the collection Name
module.exports = mongoose.model('todolist', todoSchema)