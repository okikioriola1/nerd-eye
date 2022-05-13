import React from 'react'

import './howItWorks.css'
import WorkCard from './WorkCard'
import WorkArrow from '../../assets/images/work-arrow.svg'

const HowItWorks = () => {
    return (
        <div className="how-it-works-section">
            <div className="how-it-works-container">
                <div className="how-it-works-header">
                    <h1>HOW IT WORKS</h1>
                </div>
                <div className="how-it-works-main">
                    <WorkCard number={"1"}/>
                    <div className="arrow-part">
                        <img src={WorkArrow} alt="arrow"/>
                    </div>
                    <WorkCard number={"2"}/>
                    <div className="arrow-part">
                        <img src={WorkArrow} alt="arrow"/>
                    </div>
                    <WorkCard number={"3"}/>

                </div>
            </div>
            
        </div>
    )
}

export default HowItWorks
