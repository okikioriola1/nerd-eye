import React from 'react'

import {FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import LogoImg from '../../assets/images/nerd-eye-logo.svg'
import FooterMapIcon from '../../assets/images/map-icon.svg'
import FooterEmailIcon from '../../assets/images/email-icon.svg'
import FooterCallIcon from '../../assets/images/call-icon.svg'

import './footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="footer-logo-image">
                    <img src={LogoImg} alt="footer-logo"/>
                </div>
                <div className="footer-top-part">
                    <div className="contact-part">
                        <div className="footer-link-header">
                            <h1>Contact</h1>
                            <p>We build and we teach tech and digital solutions</p>
                        </div>
                        <div className="footer-contact">
                            <img src={FooterMapIcon} alt="footer-icon"/>
                            <p>4 Ishola Alagomeji, Off Herbert Macaulay, Yaba, Lagos</p>
                        </div>
                        <div className="footer-contact">
                            <img src={FooterEmailIcon} alt="footer-icon"/>
                            <p>info@nerdyeye.com</p>
                        </div>
                        <div className="footer-contact">
                            <img src={FooterCallIcon} alt="footer-icon"/>
                            <p>+234 812 724 4042</p>
                        </div>
                    </div>
                    <div className="services-part">
                    <div className="footer-link-header">
                            <h1>Services</h1>
                        </div>
                        <div className="footer-link-body">
                            <p>Website Design/Development</p>
                            <p> Mobile App Development</p>
                            <p>  Digital Marketing Campaign 
                                Management</p>
                        </div>

                    </div>
                    <div className="courses-part">
                    <div className="footer-link-header">
                            <h1>Courses</h1>
                        </div>
                        <div className="footer-link-body">
                            <p>Digital Marketing </p>
                            <p> Graphics Design Training </p>
                            <p>  UI/UX Design Training</p>
                            <p>  Front-end Website Development </p>
                            <p>  Full-stack Web And Mobile App Development</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-part">
                    <div className="company-part">
                    <div className="footer-link-header">
                            <h1>Company</h1>
                        </div>
                        <div className="footer-link-body">
                            <p>About</p>
                            <p> Work Force</p>
                            <p> Contact</p>
                            <p> Blog</p>
                        </div>

                    </div>

                    <div className="other-part">
                    <div className="footer-link-header">
                            <h1>Other Links</h1>
                        </div>
                        <div className="footer-link-body">
                            <p>Careers</p>
                            <p> Site Map</p>
                            <p> Privacy</p>
                            <p> Terms</p>
                        </div>

                    </div>
                    <div className="social-part">
                    <div className="footer-link-header">
                            <h1>Social Media</h1>
                        </div>
                        <div className="footer-link-social">
                            <FaInstagram/>
                            <FaTwitter/>
                           <FaLinkedin/>
                           <FaYoutube/>
                        </div>

                    </div>


                </div>
            </div>
            <div className="reserved-rights">
                <div className="reserved-text">
                    <p>All Rights Reserved Nerdy Eye Powered By Dungada Tech Ltd.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
