import React, { memo } from 'react';
import './Skills.css'
import skills from '../objects/skills.json'


const Skills = () => {
  return (
    <div className='skills-container wrapper'>
        <div className='skills-header-text'>
            <h2>Tech 🖥️</h2>
        </div>
        <ul className='skills nanum-pen-script-regular'>
          {skills.map((skill => (
            <li key={skill.name}><img src={`${process.env.PUBLIC_URL}/images/skills/${skill.img}`} alt={`${skill.name} icon`} loading="lazy" />{skill.name}</li>
          )))}
        </ul>
    </div>
  )
}

export default memo(Skills);