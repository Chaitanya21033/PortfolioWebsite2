import React, { useState } from 'react';
import './possiblity.css';

const Section1 = () => {
  return (
    <div className='details'>
      
    <span style={{color:'var(--yellow)'}} >Education()</span> <span>&#123;</span>
    <br />
    <span className="dot">··</span>
    <span style={{color:'var(--blue)'}} >return</span> <span>[</span>
    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'2021-now' : </span>Bachelor in Engineering </span><span id='notwork'> @IIIT Delhi</span>  <span>&#125;</span>    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'2015-2020' : </span>Secondry Education </span><span id='notwork'> @Saint Joseph's School </span><span>&#125;</span>
    <br />
    <br />
    <span className="dot">··</span><span>]</span>
    <br /><span>&#125;</span>
    </div>
  );
};

const Section2 = () => {
  const [hover, setHover] = useState(false)
  return (
    <div className='details'>
      
    <span style={{color:'var(--yellow)'}} >CloadLabs()</span> <span>&#123;</span>
    <br />
    <br />
    <span className="dot">··// 2022-now:</span>
    <span ></span> <span></span><span id='notwork'> </span>   <br />
    <span className="dot">··// Role:</span>
    <span ></span> <span></span><span id='notwork'> Software Developer</span>   <br />
    <span className="dot">··// </span>
    <span >Deployment and Backend Co-Lead</span> <span></span> <br />
    <br />
    <span className="dot">··</span>
    <span style={{color:'var(--blue)'}} >return</span> <span>[</span>
    <br />
    
    <span className="dot">····</span>
    <span >&#123;</span><span style={{color:'#64ffda'}}>'Company Website' : </span><a  id='news' href="https://cloudlab.iiitd.edu.in" target="_blank"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            className={hover ? 'hover' :''}>
           Click here!
      </a><span>&#125;</span>
    <br />
    <br />
    <span className="dot">··</span><span>]</span>
    <br /><span>&#125;</span>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className='details'>
      
    <span style={{color:'var(--yellow)'}} >Offices()</span> <span>&#123;</span>
    <br />
    <span className="dot">··</span>
    <span style={{color:'var(--blue)'}} >return</span> <span>[</span>
    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'2022-now' : </span>Coordinator </span><span id='notwork'> @The 65th Square</span>  <span>&#125;</span>    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'2023-now' : </span>Member </span><span id='notwork'> @Placement Cell</span><span>&#125;</span>
    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'2019' : </span>Curator </span><span id='notwor'> | TedX Vikramshilla</span>  <span>&#125;</span>    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'2019-2020' : </span>HeadBoy </span><span id='notwor'>| High School</span><span>&#125;</span>
    <br />
    <br />
    <span className="dot">··</span><span>]</span>
    <br /><span>&#125;</span>
    </div>
  );
};
const Section4 = () => {
  return (
    <div className='details'>
      
    <span style={{color:'var(--yellow)'}} >Achievements()</span> <span>&#123;</span>
    <br />
    <span className="dot">··</span>
    <span style={{color:'var(--blue)'}} >return</span> <span>[</span>
    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'2022' : </span>Global leadership program </span><span id='notwork'>@Fast Retailing</span>  <span>&#125;</span>
    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'2022' : </span>Pupil on CodeForces }</span>
    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'2020' : </span>ICSE state 2nd Rank in Academics }</span>
    <br />
    <br />
    <span className="dot">··</span><span>]</span>
    <br /><span>&#125;</span>
    </div>
  );
};
const Section5 = () => {
  return (
    <div className='details'>
      
    <span style={{color:'var(--yellow)'}} >Co_curricular()</span> <span>&#123;</span>
    <br />
    <span className="dot">··</span>
    <span style={{color:'var(--blue)'}} >return</span> <span>[</span>
    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'2021-now' : </span>Playing Chess }</span>
    <br />
    <br />
    <span className="dot">····</span>
    <span >&#123;</span> <span><span style={{color:'#64ffda'}}>'Hobbies' : </span>Swimming, Reading Book }</span>
    <br />
    <br />
    <span className="dot">··</span><span>]</span>
    <br /><span>&#125;</span>
    </div>
  );
};

const Possibility = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>

    <h1 className='dumb'>Let's talk more about me</h1>
    <div className='possible'>
      <nav>
        <ul>
            <button
              onClick={() => handleNavLinkClick('section1')}
              className={activeSection === 'section1' ? 'active' : ''}
            >
              Education
            </button>
            <button
              onClick={() => handleNavLinkClick('section2')}
              className={activeSection === 'section2' ? 'active' : ''}
            >
              CloudLabs
            </button>
            <button
              onClick={() => handleNavLinkClick('section3')}
              className={activeSection === 'section3' ? 'active' : ''}
            >
              Offices
            </button>
            <button
              onClick={() => handleNavLinkClick('section4')}
              className={activeSection === 'section4' ? 'active' : ''}
            >
              Achievements
            </button>
            <button
              onClick={() => handleNavLinkClick('section5')}
              className={activeSection === 'section5' ? 'active' : ''}
            >
              Co-curricular
            </button>
        </ul>
      </nav>

      <div className="content">
        {activeSection === 'section1' && <Section1 />}
        {activeSection === 'section2' && <Section2 />}
        {activeSection === 'section3' && <Section3 />}
        {activeSection === 'section4' && <Section4 />}
        {activeSection === 'section5' && <Section5 />}
      </div>
    </div>
    </div>
  );
};

export default Possibility;
