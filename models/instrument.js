const mongoose =require('mongoose')

const instrumentSchema = new mongoose.Schema({
   
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 1
    },
    type: {
        type: String,
        enum: ['string', 'percussion', 'wind']
    },
})

module.exports = mongoose.model('Instrument', instrumentSchema)