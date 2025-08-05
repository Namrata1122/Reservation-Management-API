const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true,
    },
    description :String,
    location:String,
    capacity: Number
},{timestamps:true});

module.exports = mongoose.model('Resources',resourceSchema);