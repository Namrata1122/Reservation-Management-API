const jwt = require('jsonwebtoken');
const asyncWrapper = require('./asyncWrapper');
const {UnauthenticatedError} = require('../error');

const autheticationMiddleware = asyncWrapper(async (req,res,next)=>{
   const authHeader = req.headers.authorization;
   
       if(!authHeader || !authHeader.startsWith('Bearer ')){
           throw new UnauthenticatedError('No token provided')
       }
   
       const token = authHeader.split(' ')[1];
       try{
           const decoded = jwt.verify(token,process.env.JWT_SECRET)
           const {id,email} = decoded;
           req.user = {id,email}
           next();
       }catch(error){
           throw new UnauthenticatedError('Not authorized to access this route')
       }
})

module.exports = autheticationMiddleware;