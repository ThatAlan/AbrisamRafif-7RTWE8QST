import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainDash from './pages/main-dash';
import Quiz from './pages/Quiz'
import Classes from './pages/Classes'
import SigGrindClass from './pages/sigma-grindset-Class'
import PythonBasics from './pages/python-basics-Class'

import Quiz1 from './pages/Quiz2'
import Quiz2 from './pages/Quiz3'
import Landing from './pages/Landing'


import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/main' element={<MainDash/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
          <Route path='/quiz2' element={<Quiz1/>}></Route>
          <Route path='/quiz3' element={<Quiz2/>}></Route>
          <Route path="/classes" element={<Classes/>}></Route>
          <Route path="/sigma-grindset" element={<SigGrindClass/>}></Route>
          <Route path="/python-basics" element={<PythonBasics/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;