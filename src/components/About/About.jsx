import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div className='About_container' id='about'>
        <div className="about_title">
            <h1 className="about_heading">About me </h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about_me">
            <p className="about1">I’m a frontend developer with a Bachelor’s degree in Computer Applications (BCA) from The American College, Madurai. I specialize in building responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React.js.</p>
            <p className="about2">I'm passionate about web design and constantly working to improve my skills, particularly in creating clean and visually engaging UI with React. I enjoy turning ideas into interactive web experiences and am eager to grow by collaborating with experienced teams.</p>
        </div>
        <div className="skills">
            <div className="skill"><p>HTML & CSS</p><hr style={{width:"75%"}} /></div>
            <div className="skill"><p>Javascript</p><hr style={{width:"50%"}}/></div>
            <div className="skill"><p>React js</p><hr style={{width:"65%"}}/></div>
            <div className="skill"><p>Python</p><hr style={{width:"50%"}}/></div>
        </div>
    </div>
  )
}

export default About