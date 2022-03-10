import {Routes, Route,Link, Router} from 'react-router-dom'
import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import Homepage from './components/Pages/Home'
import NewPagepage from './components/Pages/New'
import Contactpage from './components/Pages/Contack'
import Aboutpage from './components/Pages/About'
import Loginpage from './components/Login/Login'
import Adminpage from './components/Adminpage/Admin'
import Covid19page from './components/Covid19/Covid19'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
  const [click,setClick] = useState(false)
  return (
    
    <div className="App">

      <Nav click={click} />
      <Routes>
        <Route path="/home" element ={<Homepage/>}/>
        <Route path="/new" element ={<NewPagepage/>}/>
        <Route path="/contack" element ={<Contactpage/>}/>
        <Route path="/about" element ={<Aboutpage/>}/>
        <Route path="/login" element ={<Loginpage  setClick={setClick} />}/>
        <Route path="/admin" element ={<Adminpage/>}/>
        <Route path="/covid19" element ={<Covid19page/>}/>
 

      </Routes>
      
    </div>
   
  );
}

export default App;
