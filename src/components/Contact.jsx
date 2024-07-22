import React from 'react'

export default function Contact() {
  return (
    <div className='contact-container' id='contact'>
        <div className='wrapper'>
            <div className='contact-header-text'>
                Contact Me 💌
            </div>
            <div className="questions">Have a question or want to work together?</div>
            <form className="contact-form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="name" className="contact-form-text" placeholder="your name" />
                <input type="email" name="email" className="contact-form-text" placeholder="your email" />
                <input type="number" name="number" className="contact-form-text" placeholder="your phone" />
                <textarea className="contact-form-text" name="message" placeholder="your message">
                </textarea>
                <button type="submit" className="contact-form-btn" >Send</button>
            </form>
        </div>
    </div>
  )
}
