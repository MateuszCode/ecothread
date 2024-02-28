import React from 'react'
import {Link, Navigate} from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {DataContext} from "../App"




export default function LoginPage({}) {
    const [formData, setFormData] = React.useState({email: "", password: ""})
    const [wrongLoginDetails, setWrongLoginDetails] = React.useState(false)
    const {setAuthenticated, authenticated, setUserData} = React.useContext(DataContext)
    const auth = getAuth();

    function handleChange(event) {
        setFormData(prevData => {
            return {...prevData, [event.target.name]: event.target.value}
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setWrongLoginDetails(false)
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            setAuthenticated(user.uid)
            localStorage.setItem("uid", user.uid);
        })
        .then(() => {
            setFormData({email: "", password: "", repeatPassword: ""})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setWrongLoginDetails(true)
        });

    }

    return (
        authenticated ? <Navigate to="/your-account"/> :
        <div className="login-page-container">
            <div className="login-page-login">
                <h1>Log in to your account</h1>
                <form onSubmit={handleSubmit} className="login-form">
                        <input
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="login-input"
                        />
                        <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="login-input"
                        />
                    <button className="login-page-login-btn">Log in</button>
                </form>
            </div>
            {wrongLoginDetails ? <h4 className="wrong-login">Wrong login info. Try again!</h4> : null}
            <div className="register">
                <h1>Need an account?</h1>

                <Link to="/signup"><button className="register-page-register-btn">Register</button></Link>
            </div>
        </div>
    )
}