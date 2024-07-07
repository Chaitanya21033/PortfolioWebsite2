import React, { useState } from 'react';
import './Portfolio.css';

const Project = ({ image, name }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();
    const mouseX = clientX - left;
    const mouseY = clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRotation = 10;

    const percentX = (mouseX - centerX) / centerX;
    const percentY = (mouseY - centerY) / centerY;

    const rotationX = percentY * maxRotation;
    const rotationY = -percentX * maxRotation;

    setRotation({ x: rotationX, y: rotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="project">
      <div
        className="container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
      >
          <div className="project-name">{name}</div>
        <img className='project-image'
          src={image}
          alt={name}
          
        />
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className='dumb1'>Some Things I've Built</h1>
      <div className="project-list">
        <Project
          image="myGame.png"
          name="Tank Star"
        />
      </div>
    </div>
  );
};

export default Portfolio;
