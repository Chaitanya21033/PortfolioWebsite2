import React from 'react'
import { useState } from 'react';
import './Adjust.css'

const Adjust = () => {
    const [hover, setHover] = useState(false)
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    return (
      <div className='sidebar1'>
  
        <a  id='side1' href="https://github.com/CKBanka" target="_blank"
              onMouseEnter={()=> setHover(true)}
              onMouseLeave={()=> setHover(false)}
              className={hover ? 'hover' :''}>
            <i className="fa fa-github fa-xl" style={{color: `${hover ? '#64ffda' : '#ccd6f6dc'}`}}></i>
        </a>
        <a id='side1' href="https://www.instagram.com/chiragbanka1/" target="_blank" onMouseEnter={()=> setHover1(true)}
              onMouseLeave={()=> setHover1(false)}
              className={hover1 ? 'hover' :''}>
            <i className=" fa fa-instagram fa-xl" style={{color: `${hover1 ? '#64ffda' : '#ccd6f6dc'}`}}></i>
        </a>
        <a id='side1' href="https://mail.google.com/mail/?view=cm&fs=1&to=chiragbanka1@gmail.com&authuser=0"  aria-label="Email chiragbanka1@gmail.com" target="_blank"onMouseEnter={()=> setHover2(true)}
              onMouseLeave={()=> setHover2(false)}
              className={hover2 ? 'hover' :''}>
            <i className=" fa fa-send fa-xl" style={{color: `${hover2 ? '#64ffda' : '#ccd6f6dc'}`}}></i>
        </a>
        <a id='side1' href="https://www.linkedin.com/in/chiragbanka1/" target="_blank"onMouseEnter={()=> setHover3(true)}
              onMouseLeave={()=> setHover3(false)}
              className={hover3 ? 'hover' :''}>
            <i className=" fa fa-linkedin fa-xl" style={{color: `${hover3 ? '#64ffda' : '#ccd6f6dc'}`}}></i>
        </a>
      </div>
    )
  }

export default Adjust
