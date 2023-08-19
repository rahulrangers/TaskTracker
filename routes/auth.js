const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User')
const router = express.Router();
//THIS IS ABOUT SECURITY THINGS AND ABOUT THAT
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET='HACK ME'
//ROUTE-1 TO CREATE A ACCOUNT!!
router.post('/signup',[
    body('email' ,'enter a valid email').isEmail(),
    body('password','passowrd cannot be blank').exists(),
],async (req,res)=>{
    let success=false
    console.log(req.body)
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ success ,error: error.array() });
    }
    let user =  await User.findOne({email:req.body.email})
        if(user){ 
            return res.status(400).json({success,error:"sorry user already exits"})
        }
    const salt = await bcrypt.genSalt(10)
    secPass = await bcrypt.hash(req.body.password,salt)
     user = await User.create({
    Name:req.body.Name,
    email:req.body.email,
    password:secPass
});
const data = {
    user:{
        id:user.id
    }
}
const authtoken = jwt.sign(data,JWT_SECRET)
success=true
res.json({success,authtoken,user})
});
router.post('/login',[
    body('email').isEmail(),
    body('password').exists(),
],async (req,res)=>{
    let success = false
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
        const {email,password}=req.body;
        try{
            let user = await  User.findOne({email});
            if(!user){
                return res.status(400).json({error:"please try to login with correct details"})
            }
        const passwordcompare = await bcrypt.compare(password,user.password);
        if( !passwordcompare){
            success=false
            return res.status(400).json({success,error:"please try to login with correct password"})
        }
        const data = {
            user:{
                id:user.id,
                name:user.name
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET)
        success=true
        res.json({success,authtoken,user})
        }
        catch(error){console.log("Internal server error")}
}
)
router.post('/getuser',require('../middleware/getdata'), async (req,res)=>{
    try{
    let userid = req.user.id
    let user =await  User.findById(userid).select('-password');
    res.json(user)
    }
   
    catch(error){
        console.error(error)
    }

})

module.exports = router
