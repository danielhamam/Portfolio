import React, { useState } from 'react'
import logo from '../images/selfie.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Navigation.css'

export class Navigation extends React.Component {
    constructor () {
        super()
        this.state = {
            active : "Home"
        }
    }

    setActive = (e) => {
        this.setState({active : e.target.innerHTML});
    }
    
    render() {
        const updated = this.state.active;
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <img className="brand" src={logo} /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={(updated === "Home" ? "nav-link active" : "nav-link")} onClick={this.setActive}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={(updated === "About" ? "nav-link active" : "nav-link")} onClick={this.setActive}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className={(updated === "Services" ? "nav-link active" : "nav-link")} onClick={this.setActive}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className={(updated === "Portfolio" ? "nav-link active" : "nav-link")} onClick={this.setActive}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className={(updated === "Interests" ? "nav-link active" : "nav-link")} onClick={this.setActive}>Interests</a>
                        </li>
                        <li className="nav-item">
                            <a className={(updated === "Contact" ? "nav-link active" : "nav-link")} onClick={this.setActive}>Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation
