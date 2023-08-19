const mongoose = require('mongoose')
const connect1=async()=>{
    await mongoose.connect("mongodb+srv://rahulreddy6118:rahul2004@cluster0.hfp1gcu.mongodb.net/?retryWrites=true&w=majority")
}
module.exports = connect1;