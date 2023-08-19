const mongoose = require('mongoose')
const userschema =  new mongoose.Schema({
    Name:{
       type: String,

    },

    email:{
        type:String,
        unique:true
       
   
    },
    password:{
        type:String,  
    }
})
module.exports=mongoose.model('client', userschema);