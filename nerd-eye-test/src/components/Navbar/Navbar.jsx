import React, {useState} from 'react'
import LogoImg from '../../assets/images/nerd-eye-logo.svg'
import CartIcon from '../../assets/images/cart-icon.svg'
import UserIcon from '../../assets/images/user-icon.svg'
import DownArrowIcon from '../../assets/images/down-arrow-icon.svg'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './Navbar.css'

const Navbar = () => {

    const MenuLinks =()=>(
        <>
        <div className="nav-link">
            <a href="#services" className="navbar-link">Services</a>
        </div>
        <div className="nav-link">
            <a href="#services" className="navbar-link">Academy</a>
        </div>
        <div className="nav-link">
            <a href="#services" className="navbar-link">Community</a>
        </div>
        <div className="nav-link">
            <a href="#services" className="navbar-link">Workforce</a>
        </div>
        <div className="nav-link">
            <a href="#services" className="navbar-link">Store</a>
        </div>
        <div className="nav-link">
            <a href="#services" className="navbar-link">Affiliate</a>
        </div>
        </>

        
    )
    const [toggleMenu, setToggleMenu]=useState(false)
    return (
        <div className="nerd-eye-navbar">
        <div className="navbar-section">
            <div className="logo-part">
                <img src={LogoImg} alt="nav-logo"/>

            </div>

            <div className="nav-items">
                <MenuLinks/>

            </div>

            <div className="nav-icons">
                <div className="cart-icon">
                    <img src={CartIcon} alt="cart"/>

                </div>
                <div className="my-account-div">
                    <img src={UserIcon} className="user-icon" alt="user"/>
                    <h1>My Account</h1>
                    <img src={DownArrowIcon}  className="down-arrow" alt="arrow"/>
                </div>

            </div>

            <div className="nav-menu">
            <div className="cart-icon-mobile">
                    <img src={CartIcon} alt="cart"/>

                </div>
            {toggleMenu ? <RiCloseLine color="#000" size={40} onClick={()=>setToggleMenu(false)}/>
                    :<RiMenu3Line color="#000" size={40} onClick={()=>setToggleMenu(true)}/>}

            {toggleMenu && (
                <div className="nav-menu-container">
                    <MenuLinks/>
                </div>
            )}

            </div>
            </div>
        </div>
    )
}

export default Navbar
