import React from 'react'
import './brands.css'
import styled from 'styled-components';
// import { useSpring, animated } from 'react-spring/web.cjs';

const Brands = () => {
  // const H1 = styled.h1`
  // font-size: 400%;`;
  // const H2 = styled.h1`
  // font-size: 300%;`;
  return (
    <div className='brand'>
      <div className='inner' >
        <h5 style={{color:'#64ffda'}}>Hey, &nbsp; my &nbsp; name&nbsp; is</h5>
        <h1 className='name'   style={{color:'#ccd6f6'}}>Chirag Banka.</h1>
        <h2 style={{color:'#8892b0'}}>I'm a third year UG student.</h2>
        <div className='info'>
          
          <p  style={{color:'#8892b0', marginRight:'15%'}}>I'm a  junior at IIIT Delhi who specializes in Web Development and Deployment. I actively participates in coding contests related to Competitive programming.</p>
        </div>
        <div className='butt'>
        <a href="https://www.linkedin.com/in/chiragbanka1/" target="_blank">
              <button className="button"  >Get in Touch</button>
        </a>

        </div>
      </div>
      
    </div>
  )
}

export default Brands
