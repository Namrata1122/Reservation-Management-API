const express = require('express');
const router = express.Router();
const {
    allUserReservations,
    createReservation,
    cancelMyReservation,
    allReservations,
    cancelReservation
} = require('../controller/reservationController');
const authenticateToken = require('../middleware/authenticationMiddleware');
const authorizeRoles = require('../middleware/authorizationMiddleware');

// Routes for users
router.route('/my').get(allUserReservations,authenticateToken);
router.route('/').post(createReservation,authenticateToken);
router.route('/:id').delete(cancelMyReservation,authenticateToken);

//Routes for admin
router.route('/').get(allReservations,authenticateToken,authorizeRoles);
router.route('/:id').delete(cancelReservation,authenticateToken,authorizeRoles);

module.exports = router;