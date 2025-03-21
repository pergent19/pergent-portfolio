import { useState, useEffect } from 'react'
import formFields from '../objects/formFields.json'
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

            <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                action="/contact/?success=true"
                className="contact-form" >
                    <input type="hidden" name="form-name" value="contact" />
                    {formFields.map((field, index) =>
                        field.type === "textarea" ? (
                          <textarea
                            key={index}
                            name={field.name}
                            className={field.className}
                            placeholder={field.placeholder}
                          />
                        ) : (
                          <input
                            key={index}
                            type={field.type}
                            name={field.name}
                            className={field.className}
                            placeholder={field.placeholder || ""}
                          />
                        )
                      )}
                    <button type="submit" className="contact-form-btn" >Send</button>
            </form>

            {/* Success Modal */}
            {success && (
              <div className="modal-overlay">
                <div className="modal">
                  <h2 className="modal-title">🎉 Thank You!</h2>
                  <p className="modal-message">
                    Your message has been sent successfully.
                  </p>
                  <button onClick={() => setSuccess(false)} className="modal-btn">
                    Close
                  </button>
                </div>
              </div>
            )}
        </div>
    </div>
  )
}
