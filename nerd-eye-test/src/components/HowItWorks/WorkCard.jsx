import React from 'react'

import './workCard.css'

const WorkCard = ({number}) => {
    return (
        <div className="work-card">
            <div className="work-card-header">
                <div className="number">
                    <h1>{number}</h1>
                </div>

            </div>
            <div className="work-card-body">
                <h2> Title goes here </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis</p>


            </div>
            
        </div>
    )
}

export default WorkCard
