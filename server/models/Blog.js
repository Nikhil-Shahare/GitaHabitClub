const mongoose =require("mongoose");
const {Schema}= mongoose;

const createBlog = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
    }
})
module.exports =mongoose.model("blog",createBlog)