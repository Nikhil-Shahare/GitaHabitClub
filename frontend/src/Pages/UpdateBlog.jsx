import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import { useBlog } from '../context/BlogContext';
const UpdateBlog = () => {
 const {id}= useParams()
 const {getSingleBlog,allBlogs,updateBlog}=useBlog();
 console.log("i return id and allblogs",id,allBlogs)
 const blog = getSingleBlog(id)
         console.log("i return blog",blog)
    const navigate = useNavigate()
    let initialHeader = JSON.parse(localStorage.getItem(`${id} title`))?JSON.parse(localStorage.getItem(`${id} title`)):blog.title
    let initialDescription =  JSON.parse(localStorage.getItem(id))? JSON.parse(localStorage.getItem(id)):blog.description
    // const title =  localStorage.getItem("title") ? JSON.parse(localStorage.getItem("title")) : "hare krishna"
    const [storage, setStorage] = useState(initialHeader)

    // const initialVal = localStorage.getItem("blog") ? JSON.parse(localStorage.getItem("blog")) : "hare krishna"

    const handlepreview = async () => {
        handleSave()
        navigate("/preview")
         
    }

    const handleSave = () => {
        localStorage.setItem(id, JSON.stringify(editorRef.current.getContent()))
        localStorage.setItem(`${id} title`, JSON.stringify(storage))
    }

    const handlePublish = async()=>{
         handleSave();
         const blog = JSON.parse(localStorage.getItem(id))
         const header = JSON.parse(localStorage.getItem(`${id} title`))
         const response = await axios.put(`http://localhost:4000/api/v1/getblog/${id}`,{title:header,description:blog,createdAt:Date.now()})
         console.log("i am updated blog",response.data)
         updateBlog(response.data)
    }

    const handleChange = (e) => setStorage(e.target.value)

    const editorRef = useRef(null);
    

    return (
        <div className="editor-container max-w-5xl    "
        >
        {allBlogs.length===0?<div>Loading</div>:
        <div>
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
                    initialValue={initialDescription}
                />
            </div>
            <div className='flex w-full max-w-3xl justify-between px-10  mt-5'>
                <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-8 border border-green-500 hover:border-transparent rounded' onClick={handlepreview}>Preview</button>
                <button className=' bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-8 border border-green-500 hover:border-transparent rounded' onClick={handleSave}>save</button>

                <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-8 border border-green-500 hover:border-transparent rounded' onClick={handlePublish}>Publish</button>
            </div>


</div>
}
        </div>
    )
}

export default UpdateBlog