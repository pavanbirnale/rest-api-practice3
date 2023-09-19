const express = require("express");
const student = require("../models/file");

const router = new express.Router();

//adding data to the database using post method.

router.post('/student',async(req,res)=>{
    try {
          const studentData= new student(req.body);
          const s1=  await studentData.save();
          res.status(202).send(s1);
          console.log(s1);
    } catch (error) {
        res.status(400).send(error);
    }
});

// getting data using get method

router.get("/student", async(req,res)=>{
    try {
     const studentData= await student.find();
     console.log(studentData);
     res.status(202).send(studentData);
    } catch (error) {
     res.status(400).send(error);
    }
 });

//  get data id 
 router.get("/student/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const data = await student.findById(_id);
        console.log(data);
        res.status(202).send(data);
    } catch (error) {
        res.status(400).json(error);
    }
 })


//find by id and delete

// router.delete("/student/:id",async(req,res)=>{
//     try {
//         const _id = req.params.id;
//         const data= await student.findByIdAndDelete(_id);
//         console.log(data);
//         res.status(202).send(data);
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });


// find by id and update

router.patch("/student/:id",async(req,res)=>{
    try {
        const _id= req.params.id;
        const data = await student.findByIdAndUpdate(_id,req.body,{new: true});
        console.log(data);
        res.status(202).send(data);
    } catch (error) {
        res.status(400).json(error);
    }
})


// find one
router.get("/student",async(req,res)=>{
    try {
        const data= await student.findOne(req.body);
    console.log(data);
    res.status(402).send(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

// find one and Update

router.delete("/student",async(req,res)=>{
    try {
        const data= await student.findOneAndUpdate({name:"pawan"},{new: true});
        console.log(data);
        res.status(202).send(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports= router;