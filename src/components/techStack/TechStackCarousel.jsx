import React from 'react';
import './TechStackCarousel.css'

const TechStackCarousel = () => {
  const techStack = [
    'React',
    'Node.js',
    'Django',
    'MongoDB',
    'SQL',
    'Python',
    'Java',
    'C/C++',
    'LibGdx',
    'custom Nginx',
  ];

  return (
    <div className="tech-stack">
      {techStack.map((tech, index) => (
        <div key={index} className="tech-rectangle">
          <p>{tech}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStackCarousel;
