import React,{useRef, useState} from 'react'
import { Editor } from '@tinymce/tinymce-react';
import "./Editor.css"
import { useNavigate } from 'react-router-dom';

const EditorTab = () => {
    const navigate = useNavigate()

    const [modal,setModal] = useState(false)
    const [storedContent,setStoredContent] =useState("")
const initialVal = localStorage.getItem("blog")?JSON.parse(localStorage.getItem("blog")):"hare krishna"
 console.log("I am initial val",initialVal)

 const handlepreview =async()=>{
     handleSave()
     navigate("/preview")
     
    }
    
const handleSave =()=>{
    localStorage.setItem("blog",JSON.stringify(editorRef.current.getContent()))
}
        
        
        const handleModal =()=>setModal(prev=>!prev)
        
        const editorRef = useRef(null);
        
    console.log(editorRef.current)
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };

  return (
    <div  className = "editor-container max-w-5xl    "
    >
        <div className='title flex flex-col items-center my-1 font-mono '>
     <h1 className='flex w-24 text-4xl mb-2'>Title</h1>
        </div>
     <input type='text' className='title-input  rounded h-10 mb-10 shadow-md'></input>
        <div className='shadow-md'>

    <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         apiKey='orq5ev0twhr6uu62jnse4t95fbe7ng9cjc127q94d2jqxlvz'
         init={{
             selector:"textarea",
             height:900,
             width:768,
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
      <div className='flex justify-center mt-5'>
      <button className='bg-green-500 rounded-md px-2 w-48 mx-2 my-2 text-3xl' onClick={handlepreview}>Preview</button>  
      <button className='bg-green-500 rounded-md px-2 w-48 mx-2 my-2 text-3xl' onClick={handleSave}>save</button>
      
        <button className='bg-green-500 rounded-md px-2 w-48 mx-2 my-2 text-3xl' onClick={log}>Publish</button>
      </div>
      


      </div>
  )
}

export default EditorTab