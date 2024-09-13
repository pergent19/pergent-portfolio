import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <div className='skills-container wrapper'>
        <div className='skills-header-text'>
            <h2>Tech 🖥️</h2>
        </div>
        <ul className='skills nanum-pen-script-regular'>
            <li><img src={`${process.env.PUBLIC_URL}/images/reactjs.png`} alt="" />ReactJS</li>
            <li><img src={`${process.env.PUBLIC_URL}/images/html5.png`} alt="" />HTML</li>
            <li><img src={`${process.env.PUBLIC_URL}/images/css.png`} alt="" />CSS</li>
            <li><img src={`${process.env.PUBLIC_URL}/images/js.png`} alt="" />Javascript </li>
            <li><img src={`${process.env.PUBLIC_URL}/images/boots.png`} alt="" />Bootstrap</li>
            <li><img src={`${process.env.PUBLIC_URL}/images/java.png`} alt="" />Java</li>
            <li><img src={`${process.env.PUBLIC_URL}/images/spring.png`} alt="" />Spring</li>
            <li><img src={`${process.env.PUBLIC_URL}/images/sass.png`} alt="" />Sass</li>
            <li><img src={`${process.env.PUBLIC_URL}/images/mongodb.png`} alt="" />MognoDB </li>
            <li><img src={`${process.env.PUBLIC_URL}/images/nodejs.png`} alt="" />Nodejs</li>
            <li><img src={`${process.env.PUBLIC_URL}/images/laravel.png`} alt="" />Laravel</li>
            <li><img src={`${process.env.PUBLIC_URL}/images/api.png`} alt="" />API </li>
        </ul>
    </div>
  )
}
