import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useBlog } from '../context/BlogContext'
import axios from 'axios'
const Blog = () => {
const {id} = useParams()
const {getSingleBlog,updateBlog,deleteBlog,allBlogs} = useBlog();
console.log("i am all blogs",allBlogs)
const [modal,setModal]=useState(false)
const blog = getSingleBlog(id)

const navigate =useNavigate()

const handleClick =()=>navigate("/list")

const handleUpdate =async()=>{
  // const response = await axios.put(`http://localhost:4000/api/v1/getblog/${id}`)
  // updateBlog(response)
navigate(`/update/${id}`)
}

const handleDelete = async()=>{
  const response = await axios.put(`http://localhost:4000/api/v1/getblog/${id}`)
  deleteBlog(response)

}

  return (
    <div className='mx-auto '>
     
        <button onClick={handleClick} className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mt-10 ' >back</button>
        <button onClick={handleUpdate} className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mt-10 ' >update</button>
       
        <div className='flex justify-between py-10'>
        <h1 className='text-3xl font-semibold' >{blog.title}</h1>
        </div>
        <div class="border-t border-black my-10 mx-2"></div>
        <div class="border-t border-black my-10 mx-2"></div>

        <div className='blog rounded-lg bg-white  max-w-3xl p-2 mx-2' dangerouslySetInnerHTML={{ __html: blog.description }}/>

    </div>
  )
}

export default Blog;