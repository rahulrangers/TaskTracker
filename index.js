const connect2 =require("./database") 
const express = require('express')
const cors = require('cors')
const app=express();
app.use(cors())
app.use(express.json());
port = 5000;
connect2();
app.use('/auth',require('./routes/auth'));
app.use('/data',require('./routes/notes'))

app.listen(port,(req,res)=>{
    console.log('lsitening to the port')
})
