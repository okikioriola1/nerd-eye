import React from 'react'

import './whyJoin.css'
import WhyJoinUsImage from '../../assets/images/why-join-us-img.png'
import PlacementCard from './PlacementCard'

const WhyJoin = () => {
    return (
        <div className="why-join-us-section">
            <div className="why-join-us-container">
                <div className="why-join-us-left">
                    <div className="why-join-us-img">
                        <img src={WhyJoinUsImage} alt="why-join"/>

                    </div>

                </div>
                <div className="why-join-us-right">
                    <div className="why-join-us-header">
                        <h1>why you should join the <span className="red-text">nerdyeye talent pipeline</span></h1>
                    </div>
                    <div className="placement-card-container">
                        <PlacementCard/>
                        <PlacementCard/>
                        <PlacementCard/>
                        <PlacementCard/>
                        <PlacementCard/>

                    </div>

                </div>
            </div>

            
        </div>
    )
}

export default WhyJoin
