const mongoose = require('mongoose');
mongoURI="mongodb+srv://nandajanair200410107081:nandaja21@cluster0.a7mz71y.mongodb.net/bitebuddy?retryWrites=true&w=majority";

const mongoDB=async()=>{
    try{
        mongoose.connect(mongoURI)
        console.log("connected")
    }
    catch(err){
        console.log(err)
    }
   
}

module.exports = mongoDB();