import React from 'react'
import gradpic from '../../images/about.jpg'

import './About.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div className="container pt-5 pb-5">
            <div className="row">

                {/* Two Columns */}

                <div className="about col-lg-6 col-xs-12 mb-5">
                    <img src={gradpic} alt="picture"/>
                </div>
                <div className="about_text col-lg-6 col-xs-12">
                    <h1> About me </h1>
                    <p> 
                    My name is Daniel Hamam, a recent graduate of Stony Brook University with a B.S. in Computer 
                    Science and over four years of experience in data structures, website 
                    development, project design, and more. I am familiar with languages including Python, 
                    Java, C, HTML/CSS, JavaScript, Bash, and have implemented frameworks such as Spring, Django, 
                    Tkinter, and more. I am currently seeking an entry level software engineer position.  
                    </p>
                    <p>  
                    A dream of mine is to collaborate with this generation's pioneers in pursuit of chasing 
                    after a greater purpose. Leaving an impact and revolutionizing the industry has always pushed 
                    me to achieve perfection. My objective is to work with a team to maintain a revenue-generating project 
                    that has groundbreaking potential. I take pride in building team-based relationships with other developers and 
                    discussing how to maximize our work's potential.
                    </p>
                    <div>
                        <center> 
                            <a href="daniel-resume.pdf" style={{color: "#e7c9a9"}}>
                                <FontAwesomeIcon href="daniel-resume.pdf" size='6x' icon={faFilePdf} />
                            </a>
                        </center>
                        <center className="mt-2"> 
                        <a href="daniel-resume.pdf" download> 
                            Daniel Hamam's Resume 
                        </a>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;