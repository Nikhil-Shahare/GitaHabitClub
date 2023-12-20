const express = require("express")
const router = express.Router()
const Blog = require("../models/Blog")


//create Blog

router.post("/createblog",async(req,res)=>{
   const {title,description} = req.body

   try{
    const response = await Blog.create({
      title,
      description,
      createdAt:Date.now()
    })
     res.status(200).json({
        success:true,
        response
     })
   }catch{
    res.status(500).json({
        success:false,
    })
   }
})

//get all Blogs

router.get("/getallblogs",async(req,res)=>{
   try{
      const response = await Blog.find()
      console.log("allblogs is called")
      res.status(200).json({
         success:true,
         response
      })


   } catch(error){
      res.status(500).json({success:false})
      console.log(error)

   }
    
})


//update blog

router.put("/getblog/:id",async(req,res)=>{
   try{

      const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.json(updatedBlog) 
   }catch(err){
      console.log(err)
   }
})

//delete blog

router.delete("/getblog/:id",async(req,res)=>{
   try{

      const deletedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.json(deletedBlog) 
   }catch(err){
      console.log(err)
   }

})

module.exports = router;