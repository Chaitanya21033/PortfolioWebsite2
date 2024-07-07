import React, {useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        {/* <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div> */}
      </div>
        <div className="gpt3__navbar-sign">
          <p className='nav'><a href="#about">.<span style={{color:'#8892b0'}}>About</span><span style={{color:'#64ffda'}}>( )</span></a></p>
          <p className='nav'><a href="#expi">.<span style={{color:'#8892b0'}}>Experience</span><span style={{color:'#64ffda'}}>( )</span></a></p>
          <p className='nav'><a href="#project">.<span style={{color:'#8892b0'}}>Projects</span><span style={{color:'#64ffda'}}>( )</span></a></p>
          <p className='nav'><a href="#foot">.<span style={{color:'#8892b0'}}>ReachMe</span><span style={{color:'#64ffda'}}>( )</span></a></p>
        </div>
      <div className="gpt3__navbar-sign">
        <a href="https://drive.google.com/file/d/147aqxp3CfVMweErYyXlSkOdRWp_psn5c/view?usp=sharing" target="_blank">
                      <button type="button" className="button">Resume</button>
                      </a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#about">.<span style={{color:'#8892b0'}}>About</span><span style={{color:'#64ffda'}}>( )</span></a></p>
          <p><a href="#expi">.<span style={{color:'#8892b0'}}>Experience</span><span style={{color:'#64ffda'}}>( )</span></a></p>
          <p><a href="#project">.<span style={{color:'#8892b0'}}>Projects</span><span style={{color:'#64ffda'}}>( )</span></a></p>
          <p><a href="#foot">.<span style={{color:'#8892b0'}}>ReachMe</span><span style={{color:'#64ffda'}}>( )</span></a></p>
        
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <a href="https://drive.google.com/file/d/147aqxp3CfVMweErYyXlSkOdRWp_psn5c/view?usp=sharing" target="_blank">
                      <button type="button" className="button">Resume</button>
                      </a>
          </div>
        </div>
        )}
       </div>
    </div>
  )
}

export default Navbar
