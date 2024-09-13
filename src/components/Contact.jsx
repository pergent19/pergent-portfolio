import { useState, useEffect } from 'react'
import './Contact.css';

export default function Contact() {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ( window.location.search.includes('success=true') ) {
          setSuccess(true);
        }
      }, []);
  return (
    <div className='contact-container' id='contact'>
        <div className='wrapper'>
            <div className='contact-header-text'>
                Contact Me 💌
            </div>
            <div className="questions">Have a question or want to work together?</div>
            {success && (
            <p style={{ color: "green" }}>Thanks for your message! </p>
            )}
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                action="/contact/?success=true"
                className="contact-form" >
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
