import React from 'react'

const Preview = () => {
const blogContent = JSON.parse(localStorage.getItem("blog"))

  return (
    <div className='mx-auto '>
        <h1>Preview</h1>

        <div className='blog bg-white max-w-3xl ' dangerouslySetInnerHTML={{ __html: blogContent }}/>
    </div>
  )
}

export default Preview