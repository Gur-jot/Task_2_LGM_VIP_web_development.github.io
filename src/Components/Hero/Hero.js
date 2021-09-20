import React from 'react'
import '../Hero/Hero.css'
import hero from '../Hero/hero1.png'

export default function Hero() {
    return (        
    <section className="home">
    <div className="content">
    <h3>Welcome To Company</h3>
    <p>Click on "get users" button to fetch "EMPLOYEES" of Company</p>
    </div>
    <div className="image">
    <img src={hero} alt="Hero"/>
    </div>
    </section>
    )
}