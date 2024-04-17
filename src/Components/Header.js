import React, { useState } from 'react';
import Logo from '../assets/images/logo';
import Iconmenu from '../assets/images/icon-menu';
import IconMenuClose from '../assets/images/icon-menu-close';
import '../styles/Header.css';

export default function Header() {
  const [active, setActive] = useState('nav__menu');
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');

  const navToggle = () => {
    setActive((prevActive) => (prevActive === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu'));
    setToggleIcon((prevIcon) => (prevIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler'));
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <Logo />
      </a>
      <ul className={active}>
      <li className='nav__item'><a href='#' className='nav__link'>Home</a></li>
      <li className='nav__item'><a href='#' className='nav__link'>New</a></li>
      <li className='nav__item'><a href='#' className='nav__link'>Popular</a></li>
      <li className='nav__item'><a href='#' className='nav__link'>Trending</a></li>
      <li className='nav__item'><a href='#' className='nav__link'>Categories</a></li>
      </ul>
      
      <div onClick={navToggle} className={toggleIcon}>
      {active === 'nav__menu' ? (
        <Iconmenu /> 
      ): (
        <IconMenuClose/>
      ) }
        
      </div>
    </nav>
  );
}
