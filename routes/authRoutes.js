const express = require('express');
const {register,login,profile} = require('../controller/authController');
const router = express.Router();
const authenticateToken = require('../middleware/authenticationMiddleware');
const authorizeRoles = require('../middleware/authorizationMiddleware')



router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(profile,authenticateToken);



module.exports = router;