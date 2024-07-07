import React from 'react'
import './App.css'

import { Article,Brands,Navbar , Project,Adjust} from './components'
import {Feature,Footer,Header,Possiblity} from './containers'
import TechStackCarousel from './components/techStack/TechStackCarousel';
const App = () => {
  return (
    <div className='App'>
        <div className="gradient__bg">
            <Navbar/>
        </div>
        <div>
          <Feature/>
          <Header/>
        </div>
        <div>
          <Brands/>
        </div>
        <div>

        <div id='about' className='together'>
          <div>
          <Article/>
          </div>
          <div className='image'>
            <img src="yesme.jpg" width={250} height={250} alt="gyg" style={{float:'right'}} />
          </div>

        </div>
        <div  className='stack'>
          <TechStackCarousel />
        </div>
        <div id='expi'>
          <Possiblity/>
        </div>
        <div id='project'>
          <Project/>
        </div>
        <div>
          <Footer/>
          <Adjust/>
        </div>
        </div>


    </div>
  )
}

export default App
