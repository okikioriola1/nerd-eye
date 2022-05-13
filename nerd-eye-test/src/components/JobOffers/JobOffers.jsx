import React from 'react'
import './jobOffers.css'
import JobOffersTopImage from '../../assets/images/pipeline-top-image.svg'
import JobOffersImage from '../../assets/images/job-offers-img.png'
import JobOfferCard from './JobOfferCard'

const JobOffers = () => {
    return (
        <div className="job-offers-section">
            <div className="job-offers-container">
                <div className="job-offers-top-image">
                    <img src={JobOffersTopImage} alt="top"/>
                </div>
                <div className="job-offers-header">
                    <h1>Job Offers</h1>
                </div>
                <div className="job-offers-main">
                    <div className="job-offers-left">
                        <div className="job-offers-counter">
                            <div className="counter-one">
                                <h1>500<span className="plus">+</span></h1>
                                <p>Job Offers</p>

                            </div>
                            <div className="counter-two">
                            <h1>100<span className="plus">+</span></h1>
                                <p>Startups</p>
                                
                                </div>
                        </div>
                        <div className="job-offers-left-cards-top">
                        <JobOfferCard/>
                        <JobOfferCard/>


                        </div>
                        <div className="job-offers-left-cards-bottom">
                        <JobOfferCard/>
                        <JobOfferCard/>
                        <JobOfferCard/>

                        <div className="see-more-btn">
                            <button>See More</button>
                        </div>


                        </div>
                        

                    </div>
                    <div className="job-offers-right">
                        <img src={JobOffersImage} alt=""/>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default JobOffers
