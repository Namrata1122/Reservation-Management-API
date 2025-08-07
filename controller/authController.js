const Users = require('../models/user') 
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const asyncWrapper = require('../middleware/asyncWrapper')
const {BadRequestError} = require('../error');

// const generateToken = (id)=>{
//     jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1800s"})
// }

const register = asyncWrapper(async (req, res)=>{
    const {username,email,password,role} = req.body;

        const userExists = await Users.findOne({username});
        if(userExists){ 
            res.status(400).json({message: `Username ${username} already taken.`})
        }else{
            const newUser = new Users({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        });

        const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"30d"});
        const savedUser = await newUser.save();

        res.status(200).json({token,savedUser});}
})

const login = asyncWrapper(async (req, res)=>{
        const email = req.body.email;
        const password = req.body.password;

        if(!email || !password){
            throw new BadRequestError('Provide email and password to login.');
        }

        const useremail = await Users.findOne({email:email});

        const isMatch = await bcrypt.compare(password, useremail.password);

        if(isMatch){
            const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"30d"});
            res.status(200).json({message : "User Logged in Successfully.",token});
        }else{
            res.send("Invalid password details!");
        }
})

const profile = asyncWrapper(async (req, res)=>{
    const profile = await Users.findOne(req.user);
    res.status(200).json({profile});
})

module.exports = {
    register,
    login,
    profile
}
