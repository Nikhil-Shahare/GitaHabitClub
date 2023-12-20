import React,{useEffect} from 'react';
import "./App.css"
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Preview from './Pages/Preview';
import NavBar from './components/Navbar/NavBar';
import List from './Pages/List';
import Blog from './Pages/Blog';
import UpdateBlog from './Pages/UpdateBlog';
import { useBlog } from './context/BlogContext';

import UpdatePreview from './Pages/UpdatePreview';
export default function App() {

  const {allBlogs,getallblogs}= useBlog()
 
   
 
  useEffect(() => {
    if (allBlogs.length === 0) {

      getallblogs(); 
    }
  }, [allBlogs])

 



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