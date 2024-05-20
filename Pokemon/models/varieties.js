const mongoose = require('mongoose')

const varietiesSchema = mongoose.Schema({
    _id : String,
    abilites : {
        is_hidden : [],
        name : [],
        text : []
    },
    form : {
        images : [],
        name : []
    },
    height : Number,
    stats : [],
    types : [],
    weight : Number
})

module.exports = mongoose.model('Varieties',varietiesSchema)