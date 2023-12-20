import axios from 'axios';
import React, { useEffect, useState } from 'react';
import textConverter from "../utils/helpers";
import {motion,AnimatePresence} from "framer-motion"
import Blog from './Blog';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
const List = () => {
  const navigate = useNavigate()
  const {handleBlogs,allBlogs,handleData,data}= useBlog()
  const [loading, setLoading] = useState(false);
  const [selectedId,setSelectedId]=useState(null);

  


  const handleSelect = (id) => {
    navigate(`/list/${id}`)
    
  };


  return (
    <div className="container mx-auto p-8 max-w-4xl">
      {!loading ? (
        <div className="">
          {data.map((blog) => (
            <motion.div 
            layoutId={blog.id} 
            className="bg-white p-4 rounded-md shadow-md grid grid-cols-6 gap-4 mb-2"
            onClick={()=>handleSelect(blog.id)}
            key={blog.id}
            >
              <div className='col-span-4'>
                <h1 className=" text-xl line-clamp-2 sm:text-2xl font-bold mb-2 md:mb-4 ">{blog.title}</h1>
                <p className=" max-[400px]:hidden  md:line-clamp-4  sm:line-clamp-2  line-clamp-1  ">{blog.text}</p>
              </div>
              <div className='flex align-middle col-span-2 justify-center'>
                <img src={blog.img} alt="Blog" className="  h-14 w-14  md:w-28 md:h-28 " />
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center">Loading...</div>
        )}


<AnimatePresence>
  {selectedId && (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20 overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedId(null)}
    >
      <motion.div
        layoutId={selectedId}
        className="z-30 bg-white p-4 rounded-lg max-w-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <motion.h1 className="text-3xl font-semibold mb-4">{singleBlog.title}</motion.h1>
        <motion.div className="border-t border-black my-2"></motion.div>
        <motion.div className="border-t border-black my-2"></motion.div>
        <motion.div className="blog" dangerouslySetInnerHTML={{ __html: singleBlog.description }} />
        <motion.button onClick={() => setSelectedId(null)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



    </div>
  );
};

export default List;
