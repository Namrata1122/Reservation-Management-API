const express = require('express');
const router = express.Router();
const {
    allUserReservations,
    createReservation,
    cancelMyReservation,
    allReservations,
    cancelReservation
} = require('../controller/reservationController');

const authenticationMiddleware = require('../middleware/authenticationMiddleware')
const authorizeRoles = require('../middleware/authorizationMiddleware');


// Routes for users
router.route('/my').get(authenticationMiddleware,allUserReservations);
router.route('/').post(authenticationMiddleware,createReservation);
router.route('/:id').delete(authenticationMiddleware,cancelMyReservation);

//Routes for admin
router.route('/').get(authenticationMiddleware,authorizeRoles('admin'),allReservations);
router.route('/:id').delete(authenticationMiddleware,authorizeRoles('admin'),cancelReservation);

module.exports = router;