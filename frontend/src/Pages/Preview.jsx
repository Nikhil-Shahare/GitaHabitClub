import React from 'react'
import { useNavigate } from 'react-router-dom'

const Preview = () => {
const blogContent = JSON.parse(localStorage.getItem("blog"))
const navigate =useNavigate()

const handleClick =()=>navigate("/")
  return (
    <div className='mx-auto bg-red-100  '>
        <h1 className='text-4xl'>Preview</h1>
        <div className='flex justify-between'>
           <button onClick={handleClick} className='rounded border-red-200 ' >back</button>
        </div>

        <div className='blog bg-white max-w-3xl p-2 mx-2' dangerouslySetInnerHTML={{ __html: blogContent }}/>

    </div>
  )
}

export default Preview