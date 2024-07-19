import React from 'react'

export default function Project() {
  return (
    <div className='project-container wrapper'>
        <div className='project-header-text'>
            <h2>My Works 👨‍💻</h2>
        </div>
        <div className='project-image-container'>
            <h3>Fullstack Application</h3>
            <div>
                <img className='project-image' src={`${process.env.PUBLIC_URL}/images/react-ordering.png`} alt="bitcapp" />
                <div className='overlay'>
                    <span className='overlay-text'>React Food Order</span>
                    <p className='overlay-description'>A simple Fullstack Web application ordering app that uses mongodb database and authentication system.</p>
                    <p className='overlay-skills'>MERN Stack</p>
                </div>
                
            </div>
            <div>
                <img className='project-image' src={`${process.env.PUBLIC_URL}/images/wbuddy.png`} alt="bitcapp" />
                <div className='overlay'>
                    <span className='overlay-text'>Workout Buddy</span>
                    <p className='overlay-description'>A simple Fullstack Web application workout management app that uses mongodb database to keep track your workouts and it uses authentication.</p>
                    <p className='overlay-skills'>MERN Stack</p>
                </div>
            </div>
            <h3>Static Website</h3>
                <div>
                    <img className='project-image' src={`${process.env.PUBLIC_URL}/images/bitcapp.png`} alt="bitcapp" />
                    <div className='overlay'>
                        <span className='overlay-text'>Bitcapp</span>
                        <p className='overlay-description'>A simple static website that has cryptocurrency information</p>
                        <p className='overlay-skills'>Quasar Framework</p>
                    </div>
                </div>
                <div>
                    <img className='project-image' src={`${process.env.PUBLIC_URL}/images/samgy.png`} alt="bitcapp" />
                    <div className='overlay'>
                        <span className='overlay-text'>Seoul Station Korean Barbeque</span>
                        <p className='overlay-description'>A simple static website for Korean Barbeque Restaurant</p>
                        <p className='overlay-skills'>HTML CSS</p>
                    </div>
                </div>
                <div>
                    <img className='project-image' src={`${process.env.PUBLIC_URL}/images/burger.png`} alt="bitcapp" />
                    <div className='overlay'>
                        <span className='overlay-text'>Boss Burger Restaurant</span>
                        <p className='overlay-description'>A simple static website for Burger Restaurant</p>
                        <p className='overlay-skills'>HTML CSS</p>
                    </div>
                </div>
        </div>
    </div>
  )
}
