import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

const Home = () => {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 768 ? true : false);
  const [smallToggle, setSmallToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='home'>
      <div className='flex-container center'>
        <div className='flex-1'>
          <div className='flex-2'>
            <h1>Welcome.</h1>
            <div className='emoji'>👋</div>
          </div>
          <Link to='/projects' className='sub-title'>I am a CS student pursuing a career in SWE</Link>
        </div>
        <div>
          {!smallScreen ? (
            <div className='my-photo'>
              <Link to='/about' className='photo-link one'>about</Link>
              <Link to='/contact' className='photo-link two'>contact</Link>
            </div>
          ) : (
            <div className='my-photo' onClick={() => setSmallToggle(true)}>
              {smallToggle && (
                <>
                  <Link to='/about' className='photo-link-mobile one'>about</Link>
                  <Link to='/contact' className='photo-link-mobile two'>contact</Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Home