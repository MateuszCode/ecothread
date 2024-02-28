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
                setSubmitMessage(<p className="submit-message">We have received your message. We will get back to you as soon as possible!</p>)
                setIsSubmitting(false)
            },
            (error) => {
                setSubmitMessage(<p className="submit-message">There have been some problem with sending your message. Please try again!</p>)
                setIsSubmitting(false)
            },
          );

        event.target.reset()
    }
    return (
        <div className="contact-page">
            <h1>Send us a message!</h1>
            <form onSubmit={handleSubmit}
            className="contact-form">
                <input
                placeholder="Email"
                type="email"
                name="email"
                required
                className="contact-input"/>
                <input
                placeholder="Name"
                type="text"
                name="name"
                required
                className="contact-input"/>
                <textarea 
                placeholder="Message"
                type="text"
                name="message"
                required
                className="contact-message"/>
                <button disabled={isSubmitting}
                className="contact-btn">
                    {isSubmitting ? "Processing..." : "Submit"}
                </button>
                {submitMessage}
            </form>
        </div>
    )
}