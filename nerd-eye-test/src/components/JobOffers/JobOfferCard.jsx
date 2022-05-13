import React from 'react'

import './jobOfferCard.css'
import OfferCardTopImage from '../../assets/images/job-offer-card-top-image-mobile.svg'
import MapIcon from '../../assets/images/job-offer-card-map-icon.svg'
import CompanyLogo from '../../assets/images/company-logo.svg'

const JobOfferCard = () => {
    return (
        <div className="job-offer-card">
            <div className="job-offer-card-first">
                <img src={OfferCardTopImage} alt="card-icon"/>
                <h3>Design</h3>

            </div>
            <div className="job-offer-card-second">
                <h1>U1/UX DESIGNER</h1>

            </div>
            <div className="job-offer-card-third">
                <div className="card-location">
                    <img src={MapIcon} alt="location-icon"/>
                    <h3>Lagos</h3>


                </div>
                <div className="job-type">
                    <p>Full time</p>

                </div>

            </div>
            <hr/>
            <div className="job-offer-card-last">
                <div className="company-name">
                    <h2>Meta</h2>

                </div>
                <div className="company-logo">
                    <img src={CompanyLogo} alt="company logo"/>
                </div>

            </div>

            
        </div>
    )
}

export default JobOfferCard
