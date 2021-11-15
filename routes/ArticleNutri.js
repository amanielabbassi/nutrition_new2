const express=require("express")
const router=express.Router()
const Articl=require("../models/Articl")
const isAuth=require("../middlewares/passport")
// add articl
router.post("/add",isAuth(),async (req,res)=>{
    try {
        const newArticl = new Articl({title:req.body.title,nameNutri:req.body.nameNutri,description:req.body.description})
await newArticl.save();
res.send(newArticl)
    } catch (error) {
        console.log(error)
        res.status(500).json({errors:error})
    }
})
// get all articls
router.get("/allarticls",isAuth(),async(req,res)=>{
    try {
        const articls= await Articl.find()
        res.send(articls)
    } catch (error) {
        res.status(500).json({errors:error})
    }
})
//prenez RDV
router.post("/RDV",isAuth(),async(req,res)=>{
    try {
        const newRDV= new RDV ({name:req.body.name,age:req.body.age,})
    } catch (error) {
        
    }
})
module.exports=router
