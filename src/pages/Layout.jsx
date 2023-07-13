import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
  const [scrollHeightCheck, setScrollHeightCheck] = useState(false);
  const [pageHeight, setPageHeight] = useState(() => {
    if (document.body.scrollHeight === 0) {
      setTimeout(() => {
        setScrollHeightCheck(true);
      }, 200)
    } else {
      if (window.innerHeight >= document.body.scrollHeight) {
        return 'calc(100vh - 50px)';
      } else {
        return '100%';
      }
    }
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight >= document.body.scrollHeight) {
        setPageHeight('calc(100vh - 50px)');
      } else {
        setPageHeight('100%');
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (window.innerHeight >= document.body.scrollHeight) {
      setPageHeight('calc(100vh - 50px)');
    } else {
      setPageHeight('100%');
    }
  }, [scrollHeightCheck])

  return (
    <div>
      <NavBar />
      <Outlet context={{ pageHeight }}/>
    </div>
  )
}
export default Layout