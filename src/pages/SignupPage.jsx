import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {DataContext} from "../App"
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore"; 
import {db} from "../index"

export default function SignupPage() {
    const [formData, setFormData] = React.useState({email: "", 
    password: "", 
    repeatPassword: "",
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    streetNumber: "",
    zipCode: "",
    phone: ""})
    const auth = getAuth();
    const {setAuthenticated, authenticated} = React.useContext(DataContext)

    function handleChange(event) {
        setFormData(prevData => {
            return {...prevData, [event.target.name]: event.target.value}
        })
        console.log(formData)
    }
    

    async function uploadDatabase(email, userId, firstName, lastName, street, streetNumber, city, zipCode, phone) {
        try {
            const adminRef = doc(db, 'users', userId);
            await setDoc(adminRef, {email: email, 
                userId: userId,
                firstName: firstName,
                lastName: lastName,
                address: {
                    street: street,
                    streetNumber: streetNumber,
                    city: city,
                    zipCode: zipCode
                },
                phone: phone
                
            })
            setAuthenticated(userId)
            localStorage.setItem("uid", user.uid)
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
  
    const usersRef = collection(db, "users");
    console.log(usersRef)

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.repeatPassword) {
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                uploadDatabase(formData.email, 
                    user.uid, formData.firstName, 
                    formData.lastName, formData.street,
                    formData.streetNumber, formData.city,
                    formData.zipCode, formData.phone)
                setAuthenticated(user.uid)
            })
            .then(() => {
                setFormData({email: "", 
                password: "", 
                repeatPassword: "",
                firstName: "",
                lastName: "",
                street: "",
                city: "",
                streetNumber: "",
                zipCode: "",
                phone: ""})
                alert("Account created")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        } 
        else {
            alert("Check the password")
        }

    }

 
    return (
        authenticated ? <Navigate to="/your-account"/> :
        <div className="signup-page-container">
             <h1>Create a new account</h1>
        <form className="login-form" onSubmit={handleSubmit}>
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
                minLength={8}
                className="login-input"

                />
                <input
                placeholder="Repeat password"
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
                minLength={8}
                className="login-input"

                />
                <input
                placeholder="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="login-input"

                />
                <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="login-input"

                />
                <input
                placeholder="Street"
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
                className="login-input"

                />
                <input
                placeholder="Street Number"
                type="text"
                name="streetNumber"
                value={formData.streetNumber}
                onChange={handleChange}
                required
                className="login-input"

                />
                <input
                placeholder="City"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="login-input"

                />
                <input
                placeholder="Zip code"
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="login-input"

                />
                   <input
                placeholder="Phone"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="login-input"

                />
            <button className="login-page-login-btn">Sign up</button>
        </form>

        </div>
    )
}