import React from 'react';
import "./App.css"
import EditorTab from './components/Editor/Editor';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Preview from './Pages/Preview';
import NavBar from './components/Navbar/NavBar';
import List from './Pages/List';
export default function App() {
  return (
    <BrowserRouter>
   <div className='app flex flex-col'>
    <NavBar/>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/preview' element={<Preview/>}/> 
     <Route path='/list' element={<List/>}/>  

    </Routes>
      </div>
    </BrowserRouter>
  );
}