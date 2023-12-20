import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePreview = () => {
const {id} = useParams();
const blogContent = JSON.parse(localStorage.getItem(id))
const title = JSON.parse(localStorage.getItem(`${id} title`))
const navigate =useNavigate()
console.log("i am update preview id",id)
const handleClick =()=>navigate(`/update/${id}`)
  return (
    <div className='mx-auto '>
     
        <button onClick={handleClick} className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mt-10 ' >back</button>
        <div className='flex justify-between py-10'>
        <h1 className='text-3xl font-semibold' >{title}</h1>
        </div>
        <div class="border-t border-black my-10 mx-2"></div>
        <div class="border-t border-black my-10 mx-2"></div>

        <div className='blog rounded-lg bg-white  max-w-3xl p-2 mx-2' dangerouslySetInnerHTML={{ __html: blogContent }}/>

    </div>
  )
}

export default UpdatePreview