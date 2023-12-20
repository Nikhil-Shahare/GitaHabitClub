import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useBlog } from '../context/BlogContext'
import axios from 'axios'
const Blog = () => {
const {id} = useParams()
const {getSingleBlog,updateBlog,deleteBlog,allBlogs} = useBlog();

const [isOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}



function closeModal() {
  setIsOpen(false);
}

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
  
  deleteBlog(response.data)
  closeModal()
  navigate("/list")
}

  return (
    <div className='mx-auto '>
      <div className='flex justify-between'>
         <div className='flex justify-between'>

        <button onClick={handleClick} className='mr-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mt-10 ' >back</button>
        <button onClick={handleUpdate} className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mt-10 ' >update</button>
         </div>
      <button onClick={openModal} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mt-10 ' >Delete</button>
      </div>
        {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-20">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              
              <div className="mt-4 justify-between flex flex-col px-20 py-5">
                <h1 className='text-2xl'>are you sure you want to delete this blog</h1>
                <button
                  onClick={closeModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-3"
                >
                  Close
                </button>

                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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