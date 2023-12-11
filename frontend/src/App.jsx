import React from 'react';
import "./App.css"
import EditorTab from './components/Editor/Editor';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Preview from './Pages/Preview';
export default function App() {
  return (
    <BrowserRouter>
   <div className='app'>

    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/preview' element={<Preview/>}/>  
    </Routes>
      </div>
    </BrowserRouter>
  );
}