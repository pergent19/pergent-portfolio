import React from 'react'
import Skills from './Skills'

export default function About() {
  return (
    <>
        <div className='about-container'>
            <div className='about-header-text'>
                <h2>About me 🛠️</h2>
                <p>4+ Years of experience in the <span>IT industry</span>.
                    I bring expertise in <span>web development, <br />  application modernization, and application support. </span>
                    I am eager to <br /> leverage my programming skills  to contribute to both  organizational growth <br /> and my personal development.</p>
                <div className='company-container'>
                    <p>UniQx AI </p> <span></span>
                    <p>Accenture</p> <span></span>
                    <p>Fujitsu</p> <span></span>
                </div>
            </div>
            <div className='about-image-container'>
                <img src={`${process.env.PUBLIC_URL}/images/dp.jpg`} alt="Skills" className="about-image" />
            </div>
        </div>
        <Skills />
     </>
  )
}
