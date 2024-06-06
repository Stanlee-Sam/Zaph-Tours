// import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <section className='newsletter-section'>
       <div className="card-content">
       <h1>Newsletter</h1>
        <p>Are you a thrill-seeker? On the lookout for your next adventure? Get on board Zaph Tours’ rollicking rollercoaster of weekly updates on safaris and beyond. Buckle up and brace yourself for the ride of your life!</p>
       
        <p>Subscribe to our newsletter and get 20% off</p>
        <form className='newsletter-form'>
            <input type="text" placeholder="Enter your email address" />
            <button type="button">Subscribe</button>
        </form>
       </div>
        
    </section>
  )
}

export default Newsletter
