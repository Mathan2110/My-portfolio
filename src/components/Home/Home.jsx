import React from 'react'
import './Home.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Home = () => {
  return (
    <div className='home_container' id='home'>
        <h1 className='home_heading'><span>I'm Mathan Kumar,</span> Frontend Developer based in Madurai.</h1>
        <p className="home_para">Frontend developer from Ramanathapuram, currently in Madurai. A fresher passionate about web development with hands-on self-learning projects.</p>
        <div className="connect_resume_btns">
            <AnchorLink className='anchor' href='#contact' offset={50}><button className="connect">Connect With Me</button></AnchorLink>
            <a className='resume' href="/My-portfolio/Resume.pdf">My resume</a>
        </div>
    </div>
  )
}

export default Home