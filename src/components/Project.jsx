import React, { useState, useEffect, memo, useCallback, useMemo  } from 'react';
import projects from '../objects/projects.json'
import './Project.css'

const Project = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [contentVisible, setContentVisible] = useState(false);

    const tabs = useMemo(() => ['All', 'React/Node', 'React', 'Static'], []);

    const handleTabClick = useCallback((tab) => {
        setActiveTab(tab);
    }, []);

    const filteredProject = useMemo(() => {
        return activeTab === 'All'
          ? projects
          : projects.filter((project) => project.type === activeTab);
      }, [activeTab]);

    useEffect(() => {
        
        setContentVisible(false); 
        const timer = setTimeout(() => setContentVisible(true), 400); 
        return () => clearTimeout(timer); 
    }, [activeTab]);

    const tabButtons = useMemo(
        () =>
          tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          )),
        [activeTab, handleTabClick, tabs]
      );

  return (
    <div className='project-container wrapper' id="projects">
        <div className='project-header-text'>
            <h2>My Works 👨‍💻</h2>
        </div>

        <div className="tab-container">
            <div className="tab-list">
                {tabButtons}
            </div>
        </div>

        <div className={`project-image-container ${contentVisible ? 'visible' : ''}`}>
                {filteredProject.map((project, index) => (
                    <div key={index}> 
                        <img className='project-image' src={`${process.env.PUBLIC_URL}/${project.imgSrc}`} alt={`${project.title} project`} loading="lazy" />
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

export default memo(Project);