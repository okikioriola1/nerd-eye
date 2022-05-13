import React from 'react'

import './placementCard.css'
import CheckIcon from '../../assets/images/check-icon.svg'

const PlacementCard = () => {
    return (
        <div className="placement-card">
            <div className="check-icon-container">
                <img src={CheckIcon} alt="check"/>

            </div>
            <div className="placement-text">
                <h2>Long-term placements</h2>
            </div>
            
        </div>
    )
}

export default PlacementCard
