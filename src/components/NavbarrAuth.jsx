import React, { useState } from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dd2 from './Drop2 copy';
import Logo from "../../public/img/logodsi.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';






function Navbar({user, onLogout}) {
    const navigate = useNavigate();
    const LogoutHandler = () => {
        // Panggil fungsi logout yang diteruskan dari komponen induk
        onLogout();
        // Redirect pengguna ke halaman login setelah logout
        navigate("/login");
      };

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
            <Link
              to='/dashboard'
              className='nav-links text-black'
              onClick={closeMobileMenu}
            >
              Beranda
            </Link>
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
              to='/pendaftaran'
              className='nav-links text-black'
              onClick={closeMobileMenu}
            >
              Pendaftaran Staff Muda
            </Link>
          </li>
          <li className={`navbar-item lg:mt-6 dropdown ${activeDropdown === 'dropdown1' ? 'active' : ''}`}>
          <Link to=''
              className='nav-links text-black' href="#" onClick={() => toggleDropdown('dropdown1')}>
            {user && user.name ? (
            <>

                <span> {user.name}  <FontAwesomeIcon icon={faChevronDown} /></span>

              {/* ... tombol logout atau elemen lain yang dibutuhkan */}
            </>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          </Link>
          {activeDropdown === 'dropdown1' && (
            <div className="">
                <Dd2 onLogout={LogoutHandler} />
            </div>

          )}
        </li>

          <li>

          </li>
        </ul>

      </nav>
    </>
  );
}

export default Navbar;
