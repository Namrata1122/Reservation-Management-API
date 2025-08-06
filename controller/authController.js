const Users = require('../models/user') 
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// const generateToken = (id)=>{
//     jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1800s"})
// }

const register = async (req, res)=>{
    const {username,email,password,role} = req.body;
    try{

        const userExists = await Users.findOne({email});
        if(userExists){ 
            res.status(400).json({message: `Username ${username} already taken.`})
        }else{
            const newUser = new Users({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        });

        const token =jwt.sign({email},process.env.JWT_SECRET)
        const savedUser = await newUser.save();

        res.status(200).json({token,savedUser});
        } 
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

const login = async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Users.findOne({email:email});

        const isMatch = await bcrypt.compare(password, useremail.password);

        if(isMatch){
            const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"1800s"});
            res.status(200).json({message : "User Logged in Successfully.",token});
        }else{
            res.send("Invalid password details!");
        }
    }catch(error){
        res.send(400).send("Invalid password details");
    }
}

const profile = async (req, res)=>{
    const profile = await Users.find({});
    res.status(200).json({profile});
}

module.exports = {
    register,
    login,
    profile
}
