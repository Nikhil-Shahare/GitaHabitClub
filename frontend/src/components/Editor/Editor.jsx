import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import "./Editor.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useBlog } from '../../context/BlogContext';
const EditorTab = () => {
    const navigate = useNavigate() 
     
    const [storage, setStorage] = useState(title)

    const title =  localStorage.getItem("title") ? JSON.parse(localStorage.getItem("title")) : "hare krishna"

    const initialVal = localStorage.getItem("blog") ? JSON.parse(localStorage.getItem("blog")) : "hare krishna"
     const {updateBlog} = useBlog()

     const [isOpen, setIsOpen] = React.useState(false);

     function openModal() {
       setIsOpen(true);
     }
   
     
   
     function closeModal() {
       setIsOpen(false);
     }




   useEffect(()=>{
     title =  localStorage.getItem("title") ? JSON.parse(localStorage.getItem("title")) : "hare krishna"

     initialVal = localStorage.getItem("blog") ? JSON.parse(localStorage.getItem("blog")) : "hare krishna"
   },[title,initialVal])
   
   
   
   
     const handlepreview = async () => {
        handleSave()
        navigate("/preview")
         
    }

    const handleSave = () => {
        localStorage.setItem("blog", JSON.stringify(editorRef.current.getContent()))
        localStorage.setItem("title", JSON.stringify(storage))
    }

    const handleReset = () => {
        localStorage.removeItem("blog")
        localStorage.removeItem("title")
    }



    const handlePublish = async()=>{
         handleSave();
         const blog = JSON.parse(localStorage.getItem("blog"))
         const header = JSON.parse(localStorage.getItem("title"))
         const response = await axios.post("https://gita-habit-club-backend.onrender.com/api/v1/createblog",{title:header,description:blog})
         updateBlog(response.data)
         handleReset()
         navigate("/list")
    }

    const handleChange = (e) => setStorage(e.target.value)

    const editorRef = useRef(null);
    

    return (
        <div className="editor-container max-w-5xl    "
        >

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
                <h1 className='text-2xl'>are you sure you want to reset</h1>
                <button
                  onClick={closeModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-3"
                >
                  Close
                </button>

                <button
                  onClick={handleReset}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3"
                >
                  reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
            <div className='title flex flex-col items-center my-1 font-mono '>
                <h1 className='flex w-24 text-4xl mb-2'>Title</h1>
            </div>
            <input
                type='text'
                className='title-input  rounded h-10 mb-10 shadow-md'
                value={storage}
                onChange={handleChange}
            ></input>
            <div className='shadow-md'>

                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    apiKey='orq5ev0twhr6uu62jnse4t95fbe7ng9cjc127q94d2jqxlvz'
                    init={{
                        selector: "textarea",
                        height: 900,
                        width: 768,
                        plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        tinycomments_mode: 'embedded',
                        tinycomments_author: 'Author name',
                        images_resizing: true,
                        image_advtab: true,
                        mergetags_list: [
                            { value: 'First.Name', title: 'First Name' },
                            { value: 'Email', title: 'Email' },
                        ],
                        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    initialValue={initialVal}
                />
            </div>
            <div className='flex w-full max-w-3xl justify-between px-10  mt-5'>
            <div>

                <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-8 border border-green-500 hover:border-transparent rounded' onClick={handlepreview}>Preview</button>
                <button className=' bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-8 border border-green-500 hover:border-transparent rounded' onClick={handleSave}>save</button>
                <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-8 border border-green-500 hover:border-transparent rounded' onClick={handlePublish}>Publish</button>
            </div>
            
            <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-8 border border-red-500 hover:border-transparent rounded' onClick={openModal}>Reset</button>
            
            
            </div>



        </div>
        //completed
    )
}

export default EditorTab