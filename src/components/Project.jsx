import React from 'react'
import projects from '../objects/projects.json'

export default function Project() {
      // Filter projects to include only those with type "fullstack"
    const fullstackProjects = projects.filter(project => project.type === 'fullstack');
    const staticProjects = projects.filter(project => project.type === 'static');
    const reactProject = projects.filter(project => project.type === 'react');
  return (
    <div className='project-container wrapper' id="projects">
        <div className='project-header-text'>
            <h2>My Works 👨‍💻</h2>
        </div>
        <div className='project-image-container'>
            <h3>Fullstack Application</h3>
            {fullstackProjects.map((project, index) => (
                <div key={index}> 
                    <img className='project-image' src={`${process.env.PUBLIC_URL}/${project.imgSrc}`} alt="bitcapp" />
                    <div className='overlay'>
                        <span className='overlay-text'>{project.title}</span>
                        <p className='overlay-description'>{project.description}</p>
                        <p className='overlay-skills'>{project.tech}</p>
                        <a className='btn-project' href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
            ))}

            <h3>Static Website</h3>
            {staticProjects.map((project, index) => (
                <div key={index}> 
                    <img className='project-image' src={`${process.env.PUBLIC_URL}/${project.imgSrc}`} alt="bitcapp" />
                    <div className='overlay'>
                        <span className='overlay-text'>{project.title}</span>
                        <p className='overlay-description'>{project.description}</p>
                        <p className='overlay-skills'>{project.tech}</p>
                        <a className='btn-project' href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
            ))}

            <h3>ReactJS Application</h3>
            {reactProject.map((project, index) => (
                <div key={index}> 
                    <img className='project-image' src={`${process.env.PUBLIC_URL}/${project.imgSrc}`} alt="bitcapp" />
                    <div className='overlay'>
                        <span className='overlay-text'>{project.title}</span>
                        <p className='overlay-description'>{project.description}</p>
                        <p className='overlay-skills'>{project.tech}</p>
                        <a className='btn-project' href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
