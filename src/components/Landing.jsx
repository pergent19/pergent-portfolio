import React, { memo } from 'react';
import './Landing.css'

const Landing = () => {
  return (
    <div className='landing-container' id='home'>
        <div className='landing-header-text'>
            <h1>Hello! I'm Pergent. 👋</h1>
            <p>I'm a <span>full-stack developer</span> specializing in <span>MERN</span> <small className='nanum-pen-script-regular'>(MongoDB, Express.js, React.js, Node.js)</small>   <br /> technologies, driven by a passion for creating compelling and user-friendly experiences. ✨</p>
        </div>
        <div className='landing-image'>
          <img src={`${process.env.PUBLIC_URL}/images/landing_coffee.jpg`} alt="Pergent enjoying a cup of coffee while coding" className='rounded-image' />
        </div>
    </div>
  )
}

export default memo(Landing);