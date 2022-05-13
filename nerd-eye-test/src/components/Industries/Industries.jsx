import React from 'react'

import './industries.css'
import IndustriesCard from './IndustriesCard'

const Industries = () => {
    return (
        <div className="industries-setion">
            <div className="industries-container">
                <div className="industries-header">
                    <h1>Browse by <span className="red">Industries</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis</p>
                </div>
                <div className="industries-card-container-one">

                    <IndustriesCard/>
                    <IndustriesCard/>
                    <IndustriesCard/>

                </div>
                <div className="industries-card-container-two">
                <IndustriesCard/>
                    <IndustriesCard/>
                    <IndustriesCard/>

                </div>
            </div>
            
        </div>
    )
}

export default Industries
