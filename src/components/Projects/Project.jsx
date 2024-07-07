import React, { useState } from 'react';
import './Project.css';

const Projects = ({ image, name,desc,sta,link }) => {
    const [hover, setHover] = useState(false);
    return (
      <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <div  id="container">	
  <a href={link} target="_blank">
      <div className="product-details">
          <p style={{color:'#64ffda',fontWeight:'bold'}}>{name} </p> <br />
      {/* <h3>My Web Portfolio</h3> */}
          
      <p className="information">{desc}</p>
          <br />
          <p style={{color:'var(--red)'}}>{sta}</p>
  
          
    </div>
  </a>
      
  
  <div className="product-image">
      
      <img src={image}   alt=""/>
      
  </div>
  
  </div>
  
  
  
      </>
    );
  };

const Project = () => {
  return (
    <div className="portfolio">
      <h1 className='dumb1'>Some Things I've Built</h1>
      <div className="project-list">
        <Projects
          image="myGame.png"
          name="Tank Star"
          desc="I made this replica of a game named Tank Star which allows player to choose their tank use angle, power and tank movement to favor them.It also supports saving and loading game."
          sta="LibGdx | Java"
          link="https://github.com/CKBanka/Tank-Stars"
          />
          <Projects
            image="cloud.png"
            name="CloudLabs Website"
            desc="This Website is made to enable hardware lab in remote environment. This Website is currently used by ECE students of IIIT Delhi and soon this will be provided to other colleges as well."
            sta="Django | Nginix | FPGA |MySql"
            link="https://cloudlab.iiitd.edu.in"
            />
        <Projects
          image="chat.png"
          name="Social ChatBot"
          desc=" The project focuses on designing an AI-enabled social counseling system based on Emotion-Focused Therapy"
          sta="React JS | TypeScript"
          link="https://github.com/CKBanka/Social-Chatbot-Project-Frontend"
          />
        <Projects
          image="profile.png"
          name="Portfolio Website"
          desc=" I made this Web Porfolio for my self to showcase my Skills. Credits to Brittany Chiang for color theme which made this website look so good."
          sta="React Js | Node Js "
          link="https://github.com/CKBanka/PortfolioWebsite"
        />
      </div>
    </div>
  );
};

export default Project;
