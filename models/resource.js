const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    img:
    {
        data: Buffer,
        contentType: String
    },
    name:{
        type:String,
        required: true,
        trim:true,
    },
    description :String,
    location:String,
    capacity: Number,
    price:Number
},{timestamps:true});

module.exports = mongoose.model('Resources',resourceSchema);