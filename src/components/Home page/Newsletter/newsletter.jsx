// import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <section className='newsletter-section'>
       <div className="card-content">
       <h1>Newsletter</h1>
        <p>Subscribe to our newsletter and get 20% off</p>
        <form className='newsletter-form'>
            <input type="text" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
        </form>
       </div>
        
    </section>
  )
}

export default Newsletter
