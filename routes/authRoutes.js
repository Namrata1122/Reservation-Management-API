const express = require('express');
const {register,login,profile} = require('../controller/authController');
const router = express.Router();

const authenticationMiddleware = require('../middleware/authenticationMiddleware');


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(authenticationMiddleware,profile);



module.exports = router;