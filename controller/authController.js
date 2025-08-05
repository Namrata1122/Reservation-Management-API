const register = (req, res)=>{
    console.log("Registered");
    res.send("You have registered");
}

const login = (req, res)=>{
    console.log("Logged in");
    res.send("You have logged-in");
}

const profile = (req, res)=>{
    console.log("Your profile");
    res.send("This is your profile");
}

module.exports = {
    register,
    login,
    profile
}
