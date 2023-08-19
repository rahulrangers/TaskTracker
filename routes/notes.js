const express = require('express');
const fetchdata = require('../middleware/getdata')
const { body, validationResult } = require('express-validator');
const Notes  = require('../models/Notes')
const router = express.Router();

router.get('/fetchnotes',fetchdata,async (req,res)=>{
    const notes = await Notes.find({user: req.user.id})
    res.json(notes)
})
router.post('/write',fetchdata,[
    body("title","enter a title of min letters 5").isLength({min:5}),
    body("description","enter a description of 6 letters").isLength({min:5})
],async(req,res)=>{
    try{
    const {title,description} = req.body;
    const note = new Notes({
    title,description, user: req.user.id, name: req.user.Name,})
    note.save()
    res.json(note)
    }
    catch(error){
        console.log(error)
    }
})
router.put('/update/:id',fetchdata,async(req,res)=>{
    const {title,description}= req.body;
    const newnote = {};
    if(title){newnote.title = title}
    if(description){newnote.description = description}

let note = await Notes.findById(req.params.id);
if(!note){
    res.status(404).send("Not Found")
    }
    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndUpdate(req.params.id,{$set: newnote},{new:true})
    res.json({note});
});
router.delete('/delete/:id',fetchdata,async(req,res)=>{
    try{
    let note = await Notes.findById(req.params.id)
    if(!note){
        res.status(404).send("not found")
    }
    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id)
    res.json(note)
}
catch(error){
    console.log( "Internl error")
}
})

module.exports = router
