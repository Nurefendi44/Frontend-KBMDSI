import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dd2 from './Drop2';
import Logo from "../../public/img/logodsi.png"



function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(true);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <>
      <nav className='navbar z-50 fixed w-full top-0 font-[Poppins]'>
        <div className="flex space-x-5 -ml-60 md:-ml-[570px] lg:-ml-0 lg:ml-12 ">
            <a href="https://instagram.com/kbmdsi.ub" target='blank'>
                <img src={Logo} className='w-24 mt-4' alt="" />
            </a>
            <h1 className="text-[#27326D] mt-5 text-3xl hidden lg:block font-bold">KBMDSI UB</h1>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links text-black ' onClick={closeMobileMenu}>
              Beranda
            </Link>
          </li>

          <li className={` lg:mt-6 ${activeDropdown === 'dropdown2' ? 'active' : ''}`}>
          <Link to='' className='nav-links text-black  ' href="#" onClick={() => toggleDropdown('dropdown2')}>
            Informasi
          </Link>
          {activeDropdown === 'dropdown2' && (
            <div className="">
            <Dropdown/>
        </div>
          )}
        </li>


          {/* <li
            className='nav-item text-black'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links text-black '
              onClick={closeMobileMenu}
            >
              Informasi <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li> */}

          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links text-black'
              onClick={closeMobileMenu}
            >
              Hubungi Kami
            </Link>
          </li>
          <li className={`navbar-item lg:mt-6 dropdown ${activeDropdown === 'dropdown1' ? 'active' : ''}`}>
          <Link to=''
              className='nav-links text-black' href="#" onClick={() => toggleDropdown('dropdown1')}>
            Profil
          </Link>
          {activeDropdown === 'dropdown1' && (
            <div className="">
                <Dd2/>
            </div>

          )}
        </li>

        <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links text-black'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>

      </nav>
    </>
  );
}

export default Navbar;
