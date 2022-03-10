import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import './Login.css'

function Login({ setClick }) {
    const nagigate = useNavigate()
    const userAdmin = {
        username: 'dunglvd',
        password: 'dung2000'
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {

        console.log({
            username,
            password
        })
        if (username == userAdmin.username && password == userAdmin.password) {
            
            nagigate("/admin")



        } else {
            
        }
    }

    return (
        <div  style={{ marginTop: 50 }} className="login">

            <div class="form-tt">
                <h2>Đăng nhập</h2>
                <form  name="dang-ky">

                    <input type="text" name="username" placeholder="Nhập tên đăng ký" onChange={e => setUsername(e.target.value)} />
                    <input type="password" name="password" placeholder="Nhập mật khẩu" onChange={e => setPassword(e.target.value)} />
                    <input type="checkbox" id="checkbox" name="checkbox" /><label class="checkbox-text">Nhớ đăng nhập lần sau</label>


                    <button onClick={() => {
                        handleLogin()
                        setClick(true)
                    }} className="btnlogin" type="submit" >Đăng nhập</button>


                    <label class="psw-text">Quên mật khẩu</label>

                </form>

            </div>



        </div>

    )

}


export default Login

