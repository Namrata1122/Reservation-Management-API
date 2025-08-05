const Users = require('../models/user') 
const bcrypt = require('bcrypt');

const register = async (req, res)=>{
    try{
        const newUser = new Users({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        });

        const savedUser = await newUser.save();

        res.status(200).json(savedUser);
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
            res.status(201).json(req.body.email);
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
