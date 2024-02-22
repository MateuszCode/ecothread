import React from 'react'

export default function FAQ() {
    return (
        <div className="faq-container">
                <div>
                    <h5>FAQ</h5>
                    <h2 className="faq-heading">Common Questions</h2>
                    <p className="faq-heading-text">Here are some of the most common questions that we get.</p>
                </div>
                <div className="faq-questions-container">
                    <div>
                        <h4 className="faq-question">What is your return policy?</h4>
                        <p className="faq-text">We offer a 30-days return policy for all items in their original condition.</p>
                    </div>
                    <div>
                        <h4 className="faq-question">How can I track my order?</h4>
                        <p className="faq-text">Once your order is shipped, you will receive a tracking number via email to track your package.</p>
                    </div>
                    <div>
                        <h4 className="faq-question">Do you offer international shipping?</h4>
                        <p className="faq-text">Yes, we offer international shipping to select countries. Shipping fees may apply.</p>
                    </div>
                    <div>
                        <h4 className="faq-question">What payment methods do you accept?</h4>
                        <p className="faq-text">We accept major credit cards, PayPal, and Apple Pay for online purchases.</p>
                    </div>
                    <div>
                        <h4 className="faq-question">How can I contact customer support?</h4>
                        <p className="faq-text">You can reach our customer support team at support@ecothread.com or through our contact form on the website.</p>
                    </div>
                </div>

            </div>
    )
}