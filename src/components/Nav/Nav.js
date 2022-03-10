import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({click}) {
    console.log(click)
    return (
        <div>
            
            <div className={click ? "topnav click" : "topnav"}>
                <div>
                <Link to="/home">Home</Link>
                <Link to="/new">News</Link>
                <Link to="/contack">Contact</Link>
                <Link to="/about">About</Link>
                </div>
                <div>
                <Link to="login">Login</Link>
                <Link to="covid19">Covid19</Link>
                </div>
  
           
            
            </div>
        </div>
    )
}

export default Nav
