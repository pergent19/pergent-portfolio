import React from 'react';
import './Timeline.css'; // The updated CSS for the vertical line and alternating layout

const TimelineItem = ({ companyIcon, companyName, role, description, date, position }) => (
  <div className={`timeline-item ${position === 'left' ? 'left' : 'right'}`}>
    <div className="timeline-content">
      <div className="timeline-icon">
        <img src={`${process.env.PUBLIC_URL}/${companyIcon}`} alt={`${companyName} icon`} />
      </div>
      <div className="timeline-text">
        <h3>{companyName}</h3>
        <h4>{role}</h4>
        <p>{description}</p>
        <span className="timeline-date">{date}</span>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  const timelineData = [
    {
      companyIcon: 'images/company/uniqx.jpg',
      companyName: 'UniQx AI',
      role: 'Fullstack Web Developer',
      description: 'Worked on full-stack projects using the MERN stack. Involved in building a banking system and an e-commerce platform.',
      date: 'June 2020',
      position: 'left',
    },
    {
      companyIcon: 'images/company/acn.png',
      companyName: 'Accenture Inc.',
      role: 'Associate Software Engineer',
      description: 'Led application modernization projects. Involved in transforming legacy projects to Azure. Contributed to a React project focused on UI and state management.',
      date: 'April 2021',
      position: 'right',
    },
    {
      companyIcon: 'images/company/fujitsu.png',
      companyName: 'Fujitsu',
      role: 'Application Systems Engineer / Consultant',
      description: 'Contributed to React projects for UI and state management. Worked on Node.js projects, focusing on creating and testing RESTful APIs.',
      date: 'August 2022 - Present',
      position: 'left',
    }
  ];

  return (
    <div className="wrapper timeline">
      <div className="timeline-line"></div>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          companyIcon={item.companyIcon}
          companyName={item.companyName}
          role={item.role}
          description={item.description}
          date={item.date}
          position={item.position}
        />
      ))}
    </div>
  );
};

export default Timeline;
