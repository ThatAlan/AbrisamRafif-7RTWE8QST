import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainDash from './pages/main-dash';
import Quiz from './pages/Quiz'
import Classes from './pages/Classes'
import SigGrindClass from './pages/sigma-grindset-Class'

import Quiz1 from './pages/Quiz2'
import Quiz2 from './pages/Quiz3'


import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainDash/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
          <Route path='/quiz2' element={<Quiz1/>}></Route>
          <Route path='/quiz3' element={<Quiz2/>}></Route>
          <Route path="/classes" element={<Classes/>}></Route>
          <Route path="/sigma-grindset" element={<SigGrindClass/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;