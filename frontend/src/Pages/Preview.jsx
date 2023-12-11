import React from 'react'
import { useNavigate } from 'react-router-dom'

const Preview = () => {
const blogContent = JSON.parse(localStorage.getItem("blog"))
const title = JSON.parse(localStorage.getItem("title"))
const navigate =useNavigate()

const handleClick =()=>navigate("/")
  return (
    <div className='mx-auto bg-white '>
        <div className='flex justify-between py-10'>
        <h1 className='text-3xl font-semibold' >{title}</h1>
        </div>
        <div class="border-t border-gray-100 my-10 mx-2"></div>
        <div class="border-t border-gray-100 my-10 mx-2"></div>

        <div className='blog bg-white max-w-3xl p-2 mx-2' dangerouslySetInnerHTML={{ __html: blogContent }}/>

        <button onClick={handleClick} className='rounded border-red-200  ' >back</button>
    </div>
  )
}

export default Preview