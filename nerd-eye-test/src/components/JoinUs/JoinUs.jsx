import React from 'react'

import './joinus.css'
import JoinUsTopImage from '../../assets/images/pipeline-top-image.svg'
import JoinUsImage from '../../assets/images/join-us-img.png'

const JoinUs = () => {
    return (
        <div className="join-us-section">
            <div className="join-us-container">
                <div className="join-us-top-image">
                    <img src={JoinUsTopImage} alt="join us top"/>

                </div>
                <div className="join-us-main-section">
                    <div className="join-us-left">
                        <div className="join-us-left-img">
                            <img src={JoinUsImage} alt="join us"/>
                        </div>

                    </div>
                    <div className="join-us-right">
                        <div className="join-us-right-header">
                            <h1>Join The Nerdyeye <span className="red-text">Network</span></h1>
                            <p>Thank you for showing interest in the Nerdy Eye’s Recruitment program. Please fill the form below and we will connect you with your ideal employers as soon as possible.</p>
                        </div>
                        <div className="form-part">
                            <form>
                                <div className="input-field">
                                    <p>Role</p>
                                    <input type="text" name="role"/>
                                </div>
                                <div className="input-field">
                                    <p>Years of work Experience</p>
                                    <input type="text" name="role"/>
                                </div>
                                <div className="input-field">
                                    <p>Work type</p>
                                    <input type="text" name="role"/>
                                </div>
                                <button className="submit-btn">Submit</button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default JoinUs
