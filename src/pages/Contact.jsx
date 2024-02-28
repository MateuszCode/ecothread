import React from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [userData, setUserData] = React.useState({
        email: "",
        name: "",
        message: ""
    })

    emailjs.init({
        publicKey: 'ynco8xG0soZqb1WuA',
        blockHeadless: true,
        limitRate: {
          // Set the limit rate for the application
          id: 'app',
          // Allow 1 request per 10s
          throttle: 10000,
        },
      });

    function handleChange(event) {
        setUserData(oldUserData => {
            return {...oldUserData, [event.target.name]: event.target.value}
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("prevented")

        emailjs.sendForm()

        setUserData({
            email: "",
            name: "",
            message: "" 
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                placeholder="Email"
                type="email"
                name="email"
                value={userData.email}
                required
                onChange={handleChange}/>
                <input
                placeholder="Name"
                type="text"
                name="name"
                value={userData.name}
                required
                onChange={handleChange}/>
                <textarea 
                placeholder="Message"
                type="text"
                name="message"
                value={userData.message}
                required
                onChange={handleChange}/>
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}