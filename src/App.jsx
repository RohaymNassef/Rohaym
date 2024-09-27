import React, { useEffect, useState } from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Project from './pages/Projects/Project';
import Contact from './pages/Contact/Contact';
const App = () => {
  let [dark , setDark] = useState(false);
  function isdark(){
    setDark(!dark)    
  }



  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    setLoading(loading);
  },[])

  setTimeout(()=>{
    setLoading(false)
  },5000)
  return (
    <div className={dark ? "app-dark" : "app"}>
      <BrowserRouter>
      <Navbar dadrk = {dark} isdark = {isdark}/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/resume' element = {<Resume/>}/>
          <Route path='/project' element = {<Project/>}/>
          <Route path='/contact' element = {<Contact/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
