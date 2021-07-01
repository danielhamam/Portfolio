import React from 'react'

// Import images
import java from './images/java.png'
import python from './images/python.png'
import javascript from './images/javascript.png'
import htmlcss from './images/htmlcss.png'
import git from './images/git.png'
import bash from './images/bash.png'
import c from './images/c.png'
import sql from './images/sql.png'
import fcp from './images/fcp.png'
import lpx from './images/lpx.png'

import OwlCarousel from 'react-owl-carousel';

class Skills extends React.Component {
    constructor() {
        super();
        this.state = {
            options: {
                loop: true,
                margin: 11,
                nav: true,
                dots : true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 4,
                    },
                },
            },
        }
    }

    render() {
    return (

        <div id="Skills" className="container-fluid skills">
            <div className="row">
                <div className="col-md-12 text-center pt-5">
                    <h2> 
                        <span className="skills_heading"> Skills </span>
                    </h2>
                    <p>(Click & Drag to Scroll)</p>
                </div>
            </div>

            <br />

            <OwlCarousel className="owl-theme" {...this.state.options}>
                <div className="item text-center">
                    <img src={java} alt="Java"/>
                    <h4 className="pt-4"> Java </h4>
                    <h4> (Proficient) </h4>
                    <p>
                        Well-versed in object-oriented programming, with experience
                        in polymorphism, encapsulation, and other appropriate fundamentals. 
                        I served as a teaching assistant for an OOP class, and 
                        also learned the power of Java in the backend. I am also intermediate with Spring Boot and
                        the workings of Spring JPA.
                    </p>
                </div>
                <div className="item text-center">
                    <img src={python} alt="Python"/>
                    <h4 className="pt-4"> Python </h4>
                    <h4> (Proficient) </h4>
                    <p>
                        Python is my go-to language, with a history of implementing algorithms, 
                        data structures and networking concepts. Intermediate with frameworks like
                        Tkinter and Django. Capable of evaluating time and spatial costs for programs,
                        maximizing the code's efficiency. 
                    </p>
                </div>
                <div className="item text-center">
                    <img src={htmlcss} alt="htmlcss"/>
                    <h4 className="pt-4"> HTML/CSS </h4>
                    <h4> (Proficient) </h4>
                    <p>
                        Experienced in building websites using HTML and applying stylization using CSS. 
                        Often Implementation of frameworks like Bootstrap and Foundation and application of
                        media queries to complete a responsive design. 
                    </p>
                </div>
                <div className="item text-center">
                    <img src={javascript} alt="JavaScript"/>
                    <h4 className="pt-4"> JavaScript </h4>
                    <h4> (Intermediate) </h4>
                    <p>
                        Creation of websites using React.js and functions written in JavaScript
                        to manipulate elements, and implementing a client endpoint to communicate with the 
                        backend via REST API. Often involved in creating a Node.js application. Also familiar
                        with use of jQuery in Web Development. 
                    </p>
                </div>
                <div className="item text-center">
                    <img src={git} alt="git"/>
                    <h4 className="pt-4"> Git </h4>
                    <h4> (Intermediate) </h4>
                    <p>
                        Version control and code reliability with pushing/pulling to Git 
                        remote repository. Works best with collaboration in team settings, and
                        was perfect for my 4-person senior project!
                        <br />
                        <br />
                        Github: <a href="http://www.github.com/danielhamam"> github.com/danielhamam </a>
                    </p>
                </div>
                <div className="item text-center">
                    <img src={bash} alt="bash"/>
                    <h4 className="pt-4"> Bash </h4>
                    <h4> (Intermediate) </h4>
                    <p>
                        Use of bash commands in shell scripts to complete programming tasks.
                        Includes file input/output, pattern matching, transferring files between
                        directories, and editing content of files. Other familiar with scripting in
                        Python and Powershell.
                    </p>
                </div>
                <div className="item text-center">
                    <img src={fcp} alt="fcp"/>
                    <h4 className="pt-4"> Final Cut Pro </h4>
                    <h4> (Intermediate) </h4>
                    <p>
                        Able to edit video clips and include smooth transitions between them. Could cut unwanted film,
                        add effects and audio to footage, and other specifications. I have a passion for videography, and own a Canon T6I Rebel Series! 
                    </p>
                </div>
                <div className="item text-center">
                    <img src={lpx} alt="lpx"/>
                    <h4 className="pt-4"> Logic Pro X </h4>
                    <h4> (Intermediate) </h4>
                    <p>
                        Putting together audio using drum kits, piano keys, and other available sounds. Familiar
                        with frequency concepts and manipulations. Experienced with chord types and scales, though I am
                        actively learning piano on my freetime.
                         
                    </p>
                </div>
                <div className="item text-center">
                    <img src={c} alt="c"/>
                    <h4 className="pt-4"> C </h4>
                    <h4> (Familiar) </h4>
                    <p>
                        Related coursework to System Fundamentals II (CSE 320) in C programming includes
                        dynamic memory allocation, concurrent programming, signals, virtual memory, and 
                        exceptional control flow. I plan to enhance my C programming skills to further my understanding
                        system programming.
                    </p>
                </div>
                <div className="item text-center">
                    <img src={sql} alt="sql"/>
                    <h4 className="pt-4"> SQL </h4>
                    <h4> (Familiar) </h4>
                    <p>
                        Database experience includes Google's Firestore and mySQL. In my senior project,
                        queried for U.S. state and GeoJSON information from database to display on React.JS
                        frontend when user triggers an event. Familiar with joins and CRUD operations.

                    </p>
                </div>
            </OwlCarousel>
        </div>
        ) 
    }

}

export default Skills
