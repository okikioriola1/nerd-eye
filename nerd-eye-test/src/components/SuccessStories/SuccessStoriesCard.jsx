import React from 'react'
import ProfileImage from '../../assets/images/profile-img-one.svg'
import './successStoriesCard.css'

const SuccessStoriesCard = () => {
    return (
        <div className="success-stories-card">
            <div className="profile-card-image">
                <img src={ProfileImage} alt="profile"/>

            </div>
            <div className="profile-card-header">
                <h2>John Doe</h2>

            </div>
            <div className="profile-card-text">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse id enim auctor ultricies vulputate nisl sit lacus proin. Viverra nisl morbi commodo bibendum imperdiet. Vulputate in sed amet, malesuada vel vel. Diam, massa libero vestibulum, interdum enim eu nec. Sociis condimentum molestie sed vulputate turpis maecenas felis duis. In posuere sit malesuada non orci sagittis sit.</p>
            </div>
            
        </div>
    )
}

export default SuccessStoriesCard
