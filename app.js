const express = require('express');
const app = express();
require('dotenv').config();

const connectDB = require('./db/connectMDB.js')

const auth = require('./routes/authRoutes.js')
const resources = require('./routes/resourceRoutes.js')
const reservations = require('./routes/reservationRoutes.js')

app.use(express.json());

app.use('/auth',auth);
app.use('/resources',resources);
app.use('/reservations',reservations);

app.get('/welcome',(req,res)=>{
    res.setHeader('Content-Type','text/plain')
    res.send("Welcome to reservation management API.")
})

const port = process.env.PORT || 3000;

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>console.log(`Server is listening to port ${port}..`));
    }catch(error){
        console.log(error);
    }
}

start();