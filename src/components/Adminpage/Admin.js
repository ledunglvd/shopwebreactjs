import React,{Fragment, useState} from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Todo from './Todo'



function Admin() {
   

    const nagigate = useNavigate()
    const handleLogout = () => {
        nagigate("/login")
    }
    const handleStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
    }
    const stylesLogout = {
        background :'#333',
        color : '#fff',
        border: 'none',
        padding : '10px 20px',
        borderRadius : '5%',
        cursor : 'pointer',
        float: 'right',
        fontSize: 25

    }
    return (
        <Fragment>
        <button style={stylesLogout} className="btnLogout"onClick={handleLogout}>logout</button>
        
        <h1 style={handleStyle}>Việc cần làm</h1>
        
        <Todo/>

        
           
       
        </Fragment>
    )
}

export default Admin
