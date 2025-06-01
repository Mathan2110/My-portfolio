import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_1 from '../../assets/project1.png'
import project_2 from '../../assets/project2.png'
import project_3 from '../../assets/project3.png'
import project_4 from '../../assets/project4.png'
import project_5 from '../../assets/project5.png'
import project_6 from '../../assets/project6.png'
import eye_icon from '../../assets/eye_icon.svg'

const Project = () => {
  return (
    <div className='project_container' id='project'>
        <div className="project_title">
            <h1>My works</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="projects">
            <div className="project">
                <a href="https://mathan2110.github.io/Edusity/" target="_blank" rel="noopener noreferrer">
                <img src={project_1} alt="" />
                <div>View <img src={eye_icon} alt="" /></div>
                </a>
            </div>
            <div className="project">
                <a href="https://mathan2110.github.io/Food-cart/" target="_blank" rel="noopener noreferrer">
                <img src={project_2} alt="" />
                <div>View <img src={eye_icon} alt="" /></div>
                </a>
            </div>
            <div className="project">
                <a href="https://mathan2110.github.io/Spicy-Hut-/" target="_blank" rel="noopener noreferrer">
                <img src={project_3} alt="" />
                <div>View <img src={eye_icon} alt="" /></div>
                </a>
            </div>
            <div className="project">
                <a href="https://mathan2110.github.io/FM-Omelette-recipe/" target="_blank" rel="noopener noreferrer">
                <img src={project_4} alt="" />
                <div>View <img src={eye_icon} alt="" /></div>
                </a>
            </div>
            <div className="project">
                <a href="https://mathan2110.github.io/FM-result-summary/" target="_blank" rel="noopener noreferrer">
                <img src={project_5} alt="" />
                <div>View <img src={eye_icon} alt="" /></div>
                </a>
            </div>
            <div className="project">
                <a href="https://mathan2110.github.io/FM-Intro-component-with-signup-form/" target="_blank" rel="noopener noreferrer">
                <img src={project_6} alt="" />
                <div>View <img src={eye_icon} alt="" /></div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project