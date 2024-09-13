import React, {useState, useEffect } from 'react'
import projects from '../objects/projects.json'

export default function Project() {
    const [activeTab, setActiveTab] = useState('All');
    const [contentVisible, setContentVisible] = useState(false);

    const tabs = ['All', 'React/Node', 'React', 'Static'];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const filteredProject = activeTab === 'All' ? projects : projects.filter(project => project.type === activeTab);

    useEffect(() => {
        
        setContentVisible(false); 
        const timer = setTimeout(() => setContentVisible(true), 400); 
        return () => clearTimeout(timer); 
    }, [activeTab]);

  return (
    <div className='project-container wrapper' id="projects">
        <div className='project-header-text'>
            <h2>My Works 👨‍💻</h2>
        </div>

        <div className="tab-container">
            <div className="tab-list">
                {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
                </button>
                ))}
            </div>
        </div>

        <div className={`project-image-container ${contentVisible ? 'visible' : ''}`}>
                {filteredProject.map((project, index) => (
                    <div key={index}> 
                        <img className='project-image' src={`${process.env.PUBLIC_URL}/${project.imgSrc}`} alt="project" />
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
