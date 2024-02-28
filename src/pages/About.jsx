import React from 'react'
import manStanding from '../../Assets/images/man-standing.jpg'
import woman from '../../Assets/images/woman.jpg'
import man from '../../Assets/images/man.jpg'
import womanDress from '../../Assets/images/woman-dress.jpg'


export default function About() {
    return <div className="about-page">
        <div>
            <h1 className="about-heading">Our Mission</h1>
            <div className="text-img-container">
                <p className="about-text">Ecothread is on a mission to make sustainable fashion accessible 
                and practical for everyone. Our commitment extends beyond trendy slogans; 
                we're here to provide a straightforward and honest approach to fashion that aligns
                 with your values. We're rewriting the script on what it means to be a sustainable clothing brand.</p>
                <img className="about-img" src={woman}/>

            </div>
           
        </div>
        <div>
            <h1 className="about-heading">Who are we?</h1>
            <div className="text-img-container">
                <img className="about-img" src={man} loading="eager"/>
                <p className="about-text">We're a tight-knit team of individuals who believe in the power of small businesses to make a big impact.
                Our journey began with a shared dream of creating fashion that not only looks good but feels good too – 
                for you and the planet.</p>
            </div>

        </div>
        <div>
            <h1 className="about-heading">Crafted with love</h1>
            <div className="text-img-container">
                <p className="about-text">Each garment you find at Ecothread was handmade with love. From the selection of eco-friendly materials
                to the hands that carefully stitch each piece, there's a personal touch in everything we create. 
                We believe in the beauty of slow fashion and the authenticity that comes with it.</p>
                <img className="about-img" src={womanDress}/>
            </div>
        </div>
        <div>
            <h1 className="about-heading">Join the movement</h1>
            <div className="text-img-container">
            <img className="about-img" src={manStanding}/>
            <p className="about-text">We invite you to be a part of our story – a story of passion, purpose, and the pursuit 
                of sustainable style. Thank you for choosing Ecothread, where every purchase is a 
                small act of love and a step towards a more conscious wardrobe.</p>
            </div>
        </div>
    </div>
}