import React from 'react'

import './heroSection.css'
import HeroImage from '../../assets/images/hero-image.svg'
import TopEllipse from '../../assets/images/top-right-ellipse.svg'
import BottomEllipse from '../../assets/images/bottom-ellipse.svg'

const HeroSection = () => {
    return (
        <div className="nerd-eye-hero">
            <div className="hero-container">
                <div className="left-side">
                    <div className="hero-left-text">
                        <h1>Get matched & let your job find you</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis in elementum justo quam. Auctor metus vitae suspendisse vitae etiam id vulputate condimentum in. In massa, augue etiam libero. Pharetra ut feugiat eleifend vestibulum, hac quam. Eget volutpat fames ultrices dui placerat.</p>
                        <button>Join Talent Pipeline</button>

                    </div>
                    <div className="counter">
                        <div className="counter-one">
                            <h1>120<span className="plus">+</span></h1>
                            <p>Recruiters</p>

                        </div>
                        <div className="counter-two">
                        <h1>200<span className="plus">+</span></h1>
                            <p>Talents</p>

                        </div>
                    </div>

                </div>
                <div className="right-side">
                    <div className="top-ellipse"><img src={TopEllipse} alt="ellipse"/></div>
                    <div className="main-img">
                        <img src={HeroImage} alt="hero"/>
                    </div>

                    <div className="bottom-ellipse"><img src={BottomEllipse} alt="ellipse"/></div>


                </div>
            </div>
            
        </div>
    )
}

export default HeroSection
