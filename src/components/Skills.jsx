import React from 'react'
import './Skills.css'
import skills from '../objects/skills.json'

export default function Skills() {
  return (
    <div className='skills-container wrapper'>
        <div className='skills-header-text'>
            <h2>Tech 🖥️</h2>
        </div>
        <ul className='skills nanum-pen-script-regular'>
          {skills.map((skill => (
            <li><img src={`${process.env.PUBLIC_URL}/images/skills/${skill.img}`} alt="" />{skill.name}</li>
          )))}
        </ul>
    </div>
  )
}
