import React from 'react'

import proj1 from '../../images/proj1.png'
import proj2 from '../../images/proj2.png'
import proj3 from '../../images/proj3.png'
import proj4 from '../../images/proj4.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import {
    PopupboxContainer,
    PopupboxManager
 } from 'react-popupbox';

import "react-popupbox/dist/react-popupbox.css"

class Portfolio extends React.Component {
    constructor() {
        super()
        this.state = {
            modal_title : ""
        }
    }


    // -------------------------------------------
            // District Plans Generator
    // -------------------------------------------      

    proj1Modal = () => {
        console.log("District Plans Generator")
        const content = (
            <div>
                <img className="pb-3 pop-up" src={proj1} alt="District Generator" />
                <p className="pb-2 pop-up text-center">
                "A collaborative project, this web application implements a React-based frontend with 
                stylization tools such as Materialize, and Bootstrap. Communication is structured through 
                a REST API, facilitating communication between the front and back ends. The core of the 
                project, being the Algorithm to generate new districting plans, is provided via Python and 
                is executed through scripting commands to interact with Stony Brook's powerful server, deemed as the 
                SeaWulf."
                </p>
                <div className="text-center"> 
                    <span> GitHub: </span> <a className="github" onClick={() => window.open("https://github.com/danielhamam/District-Plans-Generator")}> https://github.com/danielhamam/District-Plans-Generator </a>
                </div>
            </div>
        )
        PopupboxManager.open({
            content,
            config: {
              titleBar: {
                enable: true,
                text: 'District Plans Generator',
                className: 'text-center text-uppercase'
              },
              fadeIn: true,
              fadeInSpeed: 500
            }
          })
    }

    proj1Redirect = () => {
        window.open("https://github.com/danielhamam/District-Plans-Generator")
    }

    // -------------------------------------------
                    // To-do list 
    // -------------------------------------------     

    proj2Modal = () => {
        const content = (
            <div>
                <img className="pb-3 pop-up" src={proj2} alt="To do lists" />
                <p className="pb-2 pop-up text-center">
                "This web application features the creation of daily to-do lists for users to keep tasks in mind. 
                Users can create a new account with their preferred email to log in and out as to save their tasks. 
                They can move sub-tasks up and down by their priorities, and mark a task as completed when they are done. 
                They can also delete/add new tasks at their free will. User authentication and data is managed by Google's 
                Firebase/Firestore. Please see the last two screenshots to view how the database is structured."
                </p>
                <div className="text-center"> 
                    <span> GitHub: </span> <a className="github" onClick={() => window.open("https://github.com/danielhamam/TodoList-React-Redux")}> https://github.com/danielhamam/TodoList-React-Redux </a>
                </div>
            </div>
        )
        PopupboxManager.open({
            content,
            config: {
              titleBar: {
                enable: true,
                text: 'Daily To-do List Manager',
                className: 'text-center text-uppercase'
              },
              fadeIn: true,
              fadeInSpeed: 500
            }
          })
    }

    proj2Redirect = () => {
        window.open("https://github.com/danielhamam/TodoList-React-Redux")
    }

    // -------------------------------------------
                    // Wireframer
    // -------------------------------------------     

    proj3Modal = () => {
        const content = (
            <div>
                <img className="pb-3 pop-up" src={proj3} alt="Wireframers" />
                <p className="pb-2 pop-up text-center">
                "The project mimics the creation of a website prototype. It offers a playground for new creators to 
                add and edit contents of a pseudo-website. User authentication and data storage is maintained by Google's 
                Firebase and Firestore services. The screenshots below feature a rundown of a user's venture through the 
                application. They can create an account and create wireframes at their leisure!"
                </p>
                <div className="text-center"> 
                    <span> GitHub: </span> <a className="github" onClick={() => window.open("https://github.com/danielhamam/Wireframer-Project")}> https://github.com/danielhamam/Wireframer-Project </a>
                </div>
            </div>
        )
        PopupboxManager.open({
            content,
            config: {
              titleBar: {
                enable: true,
                text: 'Wireframer',
                className: 'text-center text-uppercase'
              },
              fadeIn: true,
              fadeInSpeed: 500
            }
          })
    }

    proj3Redirect = () => {
        window.open("https://github.com/danielhamam/Wireframer-Project")
    }

    // -------------------------------------------
                 // Music Production
    // -------------------------------------------     

    proj4Modal = () => {
        const content = (
            <div>
                <img className="pb-3 pop-up" src={proj4} alt="Music Production" />
                <p className="pb-2 pop-up text-center">
                "The website application features a beats catalogue formatted by BeatStars.com and purchase
                options for music compositions. On the bottom, there is a contact option that redirects the 
                message to one of my personal emails."
                </p>
                <div className="text-center"> 
                    <span> GitHub: </span> <a className="github" onClick={() => window.open("https://github.com/danielhamam/Music-Production-Website")}> https://github.com/danielhamam/Music-Production-Website </a>
                </div>
            </div>
        )
        PopupboxManager.open({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Music Production Website",
                className: 'text-center text-uppercase'
              },
              fadeIn: true,
              fadeInSpeed: 500
            }
          })
    }    
    proj4Redirect = () => {
        window.open("https://github.com/danielhamam/Music-Production-Website")
    }

    render() {

        return (
            <div id="Portfolio">
                <div className="container-md py-5"> 
                    <h1 className = "text-center"> Portfolio </h1>
                    <p className="text-center pb-5"> (Hover & Select Option) </p>
                    <div className="portfolio-wrapper row"> 

                        <div className="col portfolio-holder"> 
                            <img className="proj-image" src={proj1} alt="District Plans Generator" />
                            <div className="selecting"></div> 
                                <FontAwesomeIcon className="portfolio-icon1" icon={faEye} onClick={this.proj1Modal}/>
                                <FontAwesomeIcon className="portfolio-icon2" icon={faExternalLinkAlt} onClick={this.proj1Redirect}/>
                        </div>

                        {/*  */}

                        <div className="col portfolio-holder"> 
                            <img className="proj-image" src={proj2} alt="" />
                            <div className="selecting"> </div>
                            <FontAwesomeIcon className="portfolio-icon1" icon={faEye} onClick={this.proj2Modal}/>
                            <FontAwesomeIcon className="portfolio-icon2" icon={faExternalLinkAlt} onClick={this.proj2Redirect}/>
                        </div>

                        {/*  */}

                        <div className="col portfolio-holder"> 
                            <img className="proj-image" src={proj3} alt="" />
                            <div className="selecting"> </div>
                            <FontAwesomeIcon className="portfolio-icon1" icon={faEye} onClick={this.proj3Modal}/>
                            <FontAwesomeIcon className="portfolio-icon2" icon={faExternalLinkAlt} onClick={this.proj3Redirect}/>
                        </div>

                        {/*  */}

                        <div className="col portfolio-holder"> 
                            <img className="proj-image" src={proj4} alt="" />
                            <div className="selecting"> </div>
                            <FontAwesomeIcon className="portfolio-icon1" icon={faEye} onClick={this.proj4Modal}/>
                            <FontAwesomeIcon className="portfolio-icon2" icon={faExternalLinkAlt} onClick={this.proj4Redirect}/>
                        </div>

                    </div>
                </div>
                <PopupboxContainer/>
            </div>
            );
        }
    }

export default Portfolio
