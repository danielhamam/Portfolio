import React from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faLinkedin,
    faGithub
 } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="row">
                    <div className="copyright col"> 
                        &copy; Copyright 2021 Daniel Hamam
                    </div>
                    <div className="col socials"> 
                        <a className="float-right" href="http://github.com/danielhamam"> <FontAwesomeIcon className="social" icon={faGithub} style={{color:"white"}}/> </a>
                        <a className="ms-auto" href="http://www.linkedin.com/in/danielhamam"> <FontAwesomeIcon className="social" icon={faLinkedin} style={{color:"white"}}/> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
