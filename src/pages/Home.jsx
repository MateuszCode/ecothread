import React from 'react'
import { Link } from "react-router-dom"
import CardComponent from "../../Components/CardComponent"
import { GiEcology } from "react-icons/gi";
import { TbVectorBezierCircle } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";


export default function Home() {

    return (
        <div className="home-page">
            <div className="hero">
                <h1 className="hero-heading">Discover Sustainable Style</h1>
                <div className="hero-nav">
                    <Link to="/shop" className="hero-shop-now btn">Shop Now</Link>
                    <Link to="/about" className="hero-learn-more">Learn more →</Link>
                </div>
            </div>
            <div className="features">
                <h5 className="feature-heading">FEATURES</h5>
                <h2 className="feature-heading feature-heading-explore">Explore Our Features</h2>
                <div className="feature-cards">
                    <CardComponent
                    title="Ethical Sourcing"
                    icon={<GiEcology />}>
                        Responsibly sourced materials and fair labor practices create clothing that 
                        aligns with your values and supports ethical fashion.
                    </CardComponent>
                    <CardComponent
                    title="Transparent Supply Chain"
                    icon={<TbVectorBezierCircle />}>
                        Trace your clothing's journey from source to product, 
                        empowering you with knowledge and confidence in your sustainable fashion choices.
                    </CardComponent>
                    <CardComponent
                    title="Cruelty-Free Fashion"
                    icon={<GiRabbit />}>
                        We love animals and we are against all animals exploitation. For that reason, 
                        all of our materials and processes are completely cruelty free.
                    </CardComponent>
                    <CardComponent
                    title="Fair Worker Treatment"
                    icon={<FaHeart />}>
                        Choose fashion that champions fairness, supporting brands committed to ethical 
                        labor practices, empowering workers, and fostering a more equitable industry.
                    </CardComponent>
                </div>
            </div>
            <div className="explore-collection">
                <h2>Explore our new collection</h2>
            </div>
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
        </div>

    )

    
   
}