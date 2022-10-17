const mongoose = require('mongoose')
const {Schema} = mongoose

const urlSchema  = new Schema({
    direction: {
        // required: true,
        type: String 
    }
})

module.exports = mongoose.model('urlshort',urlSchema)


