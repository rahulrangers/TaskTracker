const jwt = require('jsonwebtoken')
const JWT_SECRET='HACK ME'
const fetchdata=(req,res,next)=>{
   const token = req.header('token')
if(!token){
    res.status(401).send('please send us any token')
}
try{
 const data = jwt.verify(token,JWT_SECRET)
 req.user = data.user;
 next()
}
catch(error){
    res.status(401).send('please enter a valid token')
}
}
module.exports = fetchdata;
