const Users = require('../models/user') 

const register = (req, res)=>{
    console.log("Registered");
    res.send("You have registered");
}

const login = (req, res)=>{
    console.log("Logged in");
    res.send("You have logged-in");
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
