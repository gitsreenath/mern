const express=require('express')
const User=require('../models/usermodel')
const router=express.Router();


// insert to db
router.post('/',async (req,res)=>{
    const {name,email,age}=req.body
    try {
        const userData=await User.create({name:name,
        email:email,age:age})
res.status(201).json(userData)

    } catch (error) {
        res.status(400).json({error:error.message})

        
    }
})

// find all data
router.get('/',async (req,res)=>{
    try {
        const getalldata=await User.find()
        res.status(200).json(getalldata)
    } catch (error) {
        res.status(401).json({error:error.message})  
        
    }
})

// find single data
router.get('/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const getalldata=await User.findById({_id:id})
        res.status(200).json(getalldata)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
// delete from db
router.delete('/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const deletedata=await User.findByIdAndDelete({_id:id})
        res.status(201).json(deletedata)
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
})

// update user

router.patch('/:id',async (req,res)=>{
    const {id}=req.params
    const {name,email,age}=req.body

    try {
        const updateuser=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateuser)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
})


module.exports=router