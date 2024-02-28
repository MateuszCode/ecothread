import React from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [submitMessage, setSubmitMessage] = React.useState(null)
    const [isSubmitting, setIsSubmitting] = React.useState(false)

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



    function handleSubmit(event) {
        event.preventDefault()
        setSubmitMessage(null)
        setIsSubmitting(true)
        emailjs.sendForm('default_service', 'contact_form', event.target).then(
            (response) => {
                setSubmitMessage("We have received your message. We will get back to you as soon as possible")
                setIsSubmitting(false)
            },
            (error) => {
                setSubmitMessage("There have been some problem with sending your message. Please try again!")
                setIsSubmitting(false)
            },
          );

        event.target.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                placeholder="Email"
                type="email"
                name="email"
                required/>
                <input
                placeholder="Name"
                type="text"
                name="name"
                required/>
                <textarea 
                placeholder="Message"
                type="text"
                name="message"
                required/>
                <button disabled={isSubmitting}>
                    Submit
                </button>
                {submitMessage}
            </form>
        </div>
    )
}