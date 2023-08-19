const mongoose = require('mongoose')
require('dotenv').config()
const db=process.env.DATABASE

const connect1=async()=>{
    await mongoose.connect(db,{useUnifiedTopology:true,useNewUrlParser:true})
}
module.exports = connect1;