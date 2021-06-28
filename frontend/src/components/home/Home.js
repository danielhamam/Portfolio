import React from 'react';
import './Home.css';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

import test1 from "../../images/test1.jpg"
import test2 from "../../images/test2.jpg"
import test3 from "../../images/test3.jpg"

const Home = () => {
    return (
        <div className="wrapper">
            <div id="carouselExampleIndicators" className="carousel slide" data-interval="false" data-ride="carousel" data-pause="hover">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={test1} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={test2} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={test3} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Particles 
                params= {{
                    particles: {
                        number: {
                            value: 20,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        color: {
                            value: "#e7c9a9"
                        },
                        size : {
                            value: 3
                        },
                    }
                }}
            />
            <div className="items"> 
                <span className="header_info"> DANIEL HAMAM </span>
                <Typed 
                    className = "typed"
                    strings={["Software Engineer", "Web Designer", "Creator and Innovator"]}
                    typeSpeed={100}
                    backSpeed={80}
                    loop
                />
                {/* <button className="btn-contact"> Contact Me </button> */}
            </div>
        </div> 
    )
}

export default Home;
