const mongoose = require('mongoose');

const connectDB = (url)=>{
   return mongoose.connect(url, {
    useNewUrlParser:true,
    useUnifiedTopology:true
   }
   )
}

const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('connected to MongoDb');
});
db.on('disconnected',function(){
    console.log('Mongoose disconnnected from MongoDb');
})
db.on('reconnected',function(){
    console.log('Mongoose reconnnected to MongoDb');
})
db.on('close',function(){
    console.log('Mongoose connection closed');
})

module.exports = connectDB