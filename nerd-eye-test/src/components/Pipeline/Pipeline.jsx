import React from 'react'

import './pipeline.css'
import PipeLineTopImage from '../../assets/images/pipeline-top-image.svg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PipelineCard from './PipelineCard'


const Pipeline = () => {
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
        <div className="pipeline-section">
            <div className="pipeline-container">
                <div className="top-image">
                    <img src={PipeLineTopImage} alt="pipeline"/>

                </div>
                <div className="pipeline-top-header">
                    <h1>WHO SHOULD JOIN THE NERDYEYE PIPELINE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nisl, turpis nisl dignissim. Ipsum.</p>

                </div>

                <div className="pipeline-carousel">
                <Slider {...settingsOne}>
                    <PipelineCard/>
                    <PipelineCard/>
                    <PipelineCard/>
                    </Slider>
                </div>

            </div>
            
        </div>
    )
}

export default Pipeline
