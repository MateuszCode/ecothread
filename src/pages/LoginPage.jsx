import React from 'react'
import {getUserData} from '../../Data/api'

export default function LoginPage({setUserData, setAuthorized}) {
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
        <div>
                    <h1>Please login here</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                    type="text"
                    name="username"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </label>
                <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </label>
                <button>Login</button>
            </form>

        </div>
    )
}