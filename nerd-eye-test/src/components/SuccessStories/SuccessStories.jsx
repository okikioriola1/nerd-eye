import React from 'react'

import './successStories.css'
import TopImage from '../../assets/images/pipeline-top-image.svg'
import SuccessStoriesCard from './SuccessStoriesCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStories = () => {
    const settingsOne = {
        dots: true,
        infinite: true,
        // slidesToShow: 2,
        // slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        speed: 4000,
        autoplaySpeed: 1000,
        
        responsive:[
            {
                breakpoint: 2000,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinte:true,
                    
    
                },
            },
            {
            breakpoint: 1200,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinte:true,
                
                

            },
        },
        {
            breakpoint:1050,
            settings:{
                slideToShow:1,
                slideToScroll:1,
                infinte:true,
                
            },
        },
    ],
        
      };
    return (
        <div className="success-stories-section">
            <div className="success-stories-container">
                <div className="success-stories-top-image">
                    <img src={TopImage} alt="top"/>
                </div>
                <div className="success-stories-header">
                    <h1>success stories</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum lectus placerat id in vehicula facilisi. Fusce tellus fringill</p>
                </div>
                <div className="success-stories-card-container">
                    <Slider {...settingsOne}>
                    <SuccessStoriesCard/>
                    <SuccessStoriesCard/>
                    <SuccessStoriesCard/>
                    </Slider>
                </div>
            </div>
            
        </div>
    )
}

export default SuccessStories
