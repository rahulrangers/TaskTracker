const mongoose = require('mongoose')
const connect1=async()=>{
    await mongoose.connect( "mongodb://127.0.0.1:27017/rahulnotes")
}
module.exports = connect1;