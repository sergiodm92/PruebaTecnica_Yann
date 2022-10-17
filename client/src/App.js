import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage.jsx'
import Home from './Pages/Home/Home.jsx'



function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/Home" element={<Home/>} />
    </Routes>
  );
}


export default App;
