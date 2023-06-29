import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import '../css/nav.css';

const NavBar = () => {
  const [navBreak, setNavBreak] = useState(window.innerWidth <= 650 ? true : false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileHeight, setMobileHeight] = useState(null);

  useEffect(() => {
    const scrollHeight = document.body.scrollHeight;
    if (window.innerHeight >= scrollHeight) {
        setMobileHeight(window.innerHeight)
    } else {
        setMobileHeight(scrollHeight);
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setNavBreak(true);
      } else {
        setNavBreak(false);
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

  const handleHomeClick = () => {
    setMobileOpen(false);
}


  return (
    <nav className='header'>
      <ul className='nav-container'>
        <li className='home-nav' onClick={handleHomeClick}>
          <NavLink to='/' className='flex-1'>
            <img src='/home.svg' className='home-logo' />
            <p>John Weathers</p>
          </NavLink>
        </li>
        {navBreak ? (
          <li className='nav-subcontainer-mobile'>
            <img src='/menu.svg' onClick={handleMobileMenuClick}/>
            {mobileOpen && (
                <ul className='mobile-popout' style={mobileHeight ? { height: mobileHeight } : { height: '100%' }}>
                    <li className='nav-overlay' onClick={handleMobileClick}></li>
                    <li>
                        <NavLink to='/projects' className='nav-link' onClick={handleMobileClick}>projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='nav-link' onClick={handleMobileClick}>about</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='nav-link' onClick={handleMobileClick}>contact</NavLink>
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