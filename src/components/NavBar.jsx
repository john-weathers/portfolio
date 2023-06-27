import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import '../css/nav.css';

const NavBar = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 480 ? true : false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileHeight, setMobileHeight] = useState(null);

  useEffect(() => {
    // another approach could be using a scroll/wheel event to close the mobile dropdown menu
    const offsetHeight = document.getElementsByTagName('html')[0].offsetHeight;
    if (window.innerHeight > offsetHeight) {
        setMobileHeight(window.innerHeight)
    } else {
        setMobileHeight(offsetHeight);
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleMobileClick = () => {
    setMobileOpen(false);
  }

  const handleMobileMenuClick = () => {
    setMobileOpen(prev => !prev)
  }


  return (
    <nav className='header'>
      <ul className='nav-container'>
        <li className='home-nav'>
          <NavLink to='/' className='flex-1'>
            <img src='/home.svg' className='home-logo' />
            <p>John Weathers</p>
          </NavLink>
        </li>
        {mobile ? (
          <li className='nav-subcontainer-mobile'>
            <img src='/menu.svg' onClick={handleMobileMenuClick}/>
            {mobileOpen && (
                <ul className='mobile-popout' style={mobileHeight ? { height: mobileHeight } : { height: '100%' }}>
                    <li className='nav-overlay' onClick={handleMobileClick}></li>
                    <li>
                        <NavLink to='/projects' className='nav-link'>projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='nav-link'>about</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='nav-link'>contact</NavLink>
                    </li>
                    <li className='body-overlay' onClick={handleMobileClick}></li>
                </ul>
            )}
          </li>
        ): (
          <ul className='nav-subcontainer'>
            <li>
              <NavLink to='/projects' className='nav-link main'>projects</NavLink>
            </li>
            <li>
              <NavLink to='/about' className='nav-link main'>about</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className='nav-link main'>contact</NavLink>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  )
}
export default NavBar;