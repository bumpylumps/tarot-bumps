const mongoose = require('mongoose')
const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true 
    },
    arcana: {
        type: String,
        required: true
    }, 
    id: {
        type: Number,
        required: true
    }
})




module.exports = mongoose.model('Card', cardSchema, 'cards')