const express = require('express');
const router = express.Router();
const {
    allUserReservations,
    createReservation,
    cancelMyReservation,
    allReservations,
    cancelReservation
} = require('../controller/reservationController');

const authorizeRoles = require('../middleware/authorizationMiddleware');

// Routes for users
router.route('/my').get(allUserReservations);
router.route('/').post(createReservation);
router.route('/:id').delete(cancelMyReservation);

//Routes for admin
router.route('/').get(authorizeRoles,allReservations);
router.route('/:id').delete(authorizeRoles,cancelReservation);

module.exports = router;