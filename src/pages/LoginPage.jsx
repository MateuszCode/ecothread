import React from 'react'
import {getUserData} from '../../Data/api'
import {Link} from "react-router-dom"


export default function LoginPage({setUserData, setAuthenticated}) {
    const [formData, setFormData] = React.useState({username: "", password: ""})

    function handleChange(event) {
        setFormData(prevData => {
            return {...prevData, [event.target.name]: event.target.value}
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: formData.username,
              password: formData.password,
            }),
          })
            .then((res) => res.json())
            .then((json) => {
                setAuthorized(true)
                loginUser(formData.username, formData.password)
               })
            .catch((err) => console.log(err))
    }


    function loginUser(username, password) {
        getUserData(username, password)
        .then(data => setUserData(data[0]))

    }
        

    return (
        <div className="login-page-container">
            <div className="login-page-login">
                <h1>Log in to your account</h1>
                <form onSubmit={handleSubmit} className="login-form">
                        <input
                        placeholder="Username"
                        type="text"
                        name="username"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                        <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        />
                    <button className="login-page-login-btn">Log in</button>
                </form>
            </div>
            <div className="register">
                <h1>Need an account?</h1>

                <Link to="/singup"><button className="register-page-register-btn">Register</button></Link>
            </div>
        </div>
    )
}