const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',required:true
    },
    resource:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Resources',required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('Reservation',reservationSchema);