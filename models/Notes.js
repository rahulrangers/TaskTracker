const mongoose = require('mongoose')
const notesschema =  new mongoose.Schema({
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
    },

   title:{
  type:String
   },
   tag:{
  type:String
   },

   description:{
   type:String
   },

})
module.exports=mongoose.model("notes",notesschema)