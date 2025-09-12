const mongoose = require('mongoose');
const bcrypt = require('bcrypt') // secure password hashing

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"Must provide firstname."],
        trim: true,
    },
    lastname:{
        type:String,
        required:[true,"Must provide lastname."],
        trim: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        match:[/^\S+@\S+\.\S+$/,'Please Provide valid email.']
    },
    dob:{
        type:Date,
        required:true
    },
    gender :{
        type:String,
        default:'Female',
        enum:['Male','Female','prefer not to say']
    },
    username:{
        type:String,
        required:[true,"Must provide username."],
        trim: true,
        maxlength: [20,"username cannot be more than 20 characters"]
    },
    password:{
        type:String,
        required:true,
    },
    role :{
        type:String,
        default:'user',
        enum:['user','admin']
    }
},{timestamps:true});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Users',userSchema);