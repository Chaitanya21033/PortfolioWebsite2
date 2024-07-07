import React from 'react';
import './footer.css';

const Footer = () => {
  return (
      <div id='foot' className='foot'>
        <h5 style={{color:'#64ffda'}}>Want to know more about me?</h5>
        <h2 >Get In Touch</h2>
        <div  className='workpls' style={{fontSize:'16px'}}> <h3>Currently, I am open to work. Whether you want to discuss</h3> </div>
        <div className='workpls'><h3>work or just want to say hi, I'll try</h3> </div>
        <div className='workpls'><h3> my best to get back to you! </h3></div>
        <div className='butt1'>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chiragbanka1@gmail.com&authuser=0" target="_blank">
                <button className="button1"  >Say Hello</button>
          </a>

        </div>
        <div>
          <h5>Built by Chirag Kumar Banka</h5> 
        </div>
      </div>
  );
};

export default Footer;
