import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import Logo from '../images/Logo.png';
import Heart from '../images/heart.png';
import Profile from '../images/profile.png';
import Bag from '../images/shopping-bag.png';
import Down from '../images/down.png';
import MenuImg from '../images/menuImg.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className='header-class'>
      <div className='top-header'>
        <div className='logos'>
          <img
            src={MenuImg}
            alt="Menu"
            className='menu-icon'
            onClick={toggleMobileMenu}
          />
          <img src={Logo} alt="Logo-img" className='logo-img' />
        </div>
        <span className='LOGO-text'>LOGO</span>
        <div className='icons'>
          <span>ENG <img src={Down} alt="Arrow" /></span>
          <span className='icon-img' />
          <img src={Heart} alt="Logo-img" className='icon-img' />
          <img src={Bag} alt="Logo-img" className='icon-img' />
          <img src={Profile} alt="Logo-img" className='icon-img' />
        </div>
      </div>
      <nav className={`bottom-header ${isMobileMenuOpen ? 'open' : ''}`} ref={mobileMenuRef}>
        <div className='mobile-view'>
          <span>SHOP</span>
          <span>SKILLS</span>
          <span>STORIES</span>
          <span>ABOUT</span>
          <span>CONTACT US</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
