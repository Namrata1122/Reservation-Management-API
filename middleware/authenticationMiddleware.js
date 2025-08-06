const Users = require('../models/user');
const jwt = require('jsonwebtoken');
const asyncWrapper = require('./asyncWrapper');
const createCustomError = require('../error/customError');

const authenticateToken = asyncWrapper(async(req,res,next)=>{
    let token;

    if(req.headers.authorization &&req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await Users.findById(decoded.id).select('-password');
        console.log('Authorization header',req.headers.authorization);
        console.log('Decoded User',decoded);
        console.log('User found: ',req.user);
        if(!req.user){
            return res.status(401).json({message:'User not found'});
        }
        next();
    }
    if(!token){
        return createCustomError("Not authorized, no token",401);
    }
})

module.exports = authenticateToken;