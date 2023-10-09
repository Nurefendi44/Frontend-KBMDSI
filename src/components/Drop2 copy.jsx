import React, { useState } from 'react';
import './Dropdown.css';
import { Link, useNavigate } from 'react-router-dom';
import { MenuItems } from './MenuItems copy 2';





const Drop2 = ({onLogout}) => {
    const navigate = useNavigate();
    const LogoutHandler = () => {
        // Panggil fungsi logout yang diteruskan dari komponen induk
        onLogout();
        // Redirect pengguna ke halaman login setelah logout
        navigate("/login");
      };
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}

        >
          {MenuItems.map((item, index) => {
            return (

              <li key={index}>
                <Link
                  className="w-full bg-slate-100 shadow-2xl  p-4 block "
                  onClick={() => {
                    setClick(false); // Tutup dropdown setelah item dipilih
                    if (item.title === 'Logout') {
                      LogoutHandler(); // Jika item adalah 'Logout', panggil fungsi logout
                    }
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
}

export default Drop2
