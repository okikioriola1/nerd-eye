import React from 'react'

import './pipelineCard.css'

import PipelineCardImage from '../../assets/images/pipeline-card-mobile.svg'


const PipelineCard = () => {
    return (
        <div className="pipeline-card">
            <div className="pipline-card-top">
                <div className="pipeline-card-img">
                    <img src={PipelineCardImage} alt="card"/>
                </div>

            </div>
            <div className="pipeline-card-bottom">
                <div className="pipeline-card-text">
                    <h1>UI/UX Design</h1>
                    <p>120 Jobs available</p>
                </div>
            </div>

            
        </div>
    )
}

export default PipelineCard
