const Reservation = require('../models/reservation');
const Users = require('../models/user')
const asyncWrapper = require('../middleware/asyncWrapper');
const {createCustomError} = require('../error/customError')

//user route handlers
const allUserReservations = asyncWrapper (async (req,res)=>{

    const reservation = await Reservation.find(req.user);
    res.status(200).json({reservation});
})

const createReservation = asyncWrapper(async(req,res)=>{
    const reservation = await Reservation.create(req.body);
    res.status(200).json({reservation});
})

const cancelMyReservation = asyncWrapper(async(req,res)=>{
    const {id:reservationID} = req.params;

    const reservation = await Reservation.findOneAndDelete({reservationID})
    if(!reservation){
        return createCustomError(`No reservation with id : ${reservationID}`,404)
    }
    res.status(200).json({message:`This reservation is cancelled`,reservation});
})

//admin reservation route handlers
const allReservations = asyncWrapper(async(req,res)=>{
    const reservation = await Reservation.find({});
    res.status(200).json({reservation});
})

const cancelReservation = asyncWrapper(async(req,res)=>{
    const {id:reservationID} = req.params;

    const reservation = await Reservation.findOneAndDelete({reservationID})
    if(!reservation){
        return createCustomError(`No reservation with id : ${reservationID}`,404)
    }
    res.status(200).json({message:`This reservation is cancelled`,reservation});
})


module.exports = {
    allUserReservations,
    createReservation,
    cancelMyReservation,
    allReservations,
    cancelReservation
}