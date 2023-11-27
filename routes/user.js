const express = require("express");
const userSchema=require('../models/user')

const router = express.Router();

//create user
router.post("/create", (req,res)=>{
    const user = userSchema(req.body); 
    user
        .save()
        .then((data) => res.json(data))
        .catch((error)=>res.json({messaje: error}))
});

//get all users
router.get("/GetAll", (req,res)=>{
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error)=>res.json({messaje: error}))
});

//get a user
router.get("/GetAll/:id", (req,res)=>{
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error)=>res.json({messaje: error}))
});

//update users
router.put("/users/:id", (req,res)=>{
    const { id } = req.params;
    const { name, apellido, correo, usuario, password, confirmarPassword } = req.body;

    userSchema
        .updateOne({ _id: id}, { $set: {name, apellido, correo, usuario, password, confirmarPassword} }) 
        .then((data) => res.json(data))
        .catch((error)=>res.json({messaje: error}));
});

//delete a user
router.delete("/users/:id", (req,res)=>{
    const { id } = req.params;    
    userSchema
        .remove({ _id: id})
        .then((data) => res.json(data))
        .catch((error)=>res.json({messaje: error}));
});


module.exports = router;

