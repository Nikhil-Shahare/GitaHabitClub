import React,{useEffect} from 'react';
import "./App.css"
import { BrowserRouter,Routes,Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Preview from './Pages/Preview';
import NavBar from './components/Navbar/NavBar';
import List from './Pages/List';
import Blog from './Pages/Blog';
import BlogProvider from './context/BlogContext';
import UpdateBlog from './Pages/UpdateBlog';
import { useBlog } from './context/BlogContext';
import axios from 'axios';
import UpdatePreview from './Pages/UpdatePreview';
export default function App() {

  const {handleBlogs,allBlogs,handleData,data,getallblogs}= useBlog()
 
  useEffect(() => {
   
    getallblogs();

  }, []); 
 
  useEffect(() => {
    if (allBlogs.length === 0) {
      console.log("i am length 0")
      getallblogs(); 
    }
  }, [allBlogs])

  const handleReload = ({children})=>{
   if(allBlogs.length===0){
    
     return <Navigate to ="/"/>
   }
   console.log("handelreload")
   return children;

  }



  return (
    <BrowserRouter>
    

      <div className='app flex flex-col'>
    <NavBar/>
    <Routes>
    
    <Route path='/' element={<Home />} />
          <Route
            path='/preview'
            element={allBlogs.length === 0 ? <Navigate to="/" /> : <Preview />}
          />
          <Route
            path='/preview/:id'
            element={allBlogs.length === 0 ? <Navigate to="/" /> : <UpdatePreview />}
          />
          <Route
            path='/list'
            element={allBlogs.length === 0 ? <Navigate to="/" /> : <List />}
          />
          <Route
            path='/list/:id'
            element={allBlogs.length === 0 ? <Navigate to="/" /> : <Blog />}
          />
          <Route
            path='/update/:id'
            element={allBlogs.length === 0 ? <Navigate to="/" /> : <UpdateBlog />}
          />
      
    </Routes>
      </div>
  
    
    </BrowserRouter>
  );
}