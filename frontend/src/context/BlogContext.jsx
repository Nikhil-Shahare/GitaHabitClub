import React, { createContext, useContext, useState,useEffect } from 'react';
import textConverter from '../utils/helpers';
import axios from 'axios';
const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

const BlogProvider = ({ children }) => {



  const [allBlogs, setAllBlogs] = useState([]);
 const [data,setData]=useState([]);
  
 const getallblogs = async() =>{
  try {
      
  
    if(allBlogs.length===0){
      const res = await axios.get("https://gita-habit-club-backend.onrender.com/api/v1/getallblogs");
      setAllBlogs(res.data.response);
    
      await handleData(res.data.response);
    }

    
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    // Handle the error appropriately (e.g., show an error message to the user)
  }
  
 }




const handleBlogs = (data) => {
  setAllBlogs(data)
};

const handleData = async(value)=>{
  const  response  = await textConverter(value)
  setData(response);
  

}



const updateBlog = (data) => {

   const updatedBlogs = allBlogs.map((blog)=>{
    
    if(data._id===blog._id){
        return{...blog,...data}
    }
    return blog;
   })
   handleData(updatedBlogs);
   setAllBlogs(updatedBlogs);

};

const deleteBlog = (data) => {
    const updatedBlogs = allBlogs.filter(blog=>blog._id!==data._id)
     handleData(updatedBlogs)
    setAllBlogs(updatedBlogs);

};

const getSingleBlog =(id)=>{
    const blog = allBlogs.find(blog=>blog._id===id)
    return blog
}
  return (
    <BlogContext.Provider value={{ handleBlogs,getSingleBlog,deleteBlog,updateBlog,allBlogs,handleData,data,getallblogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;

