import { Link } from 'react-router-dom';
import '../css/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='flex-container center'>
        <div className='flex-1'>
          <div className='flex-2'>
            <h1>Welcome.</h1>
            <div className='emoji'>👋</div>
          </div>
          <Link to='/projects' className='sub-title'>I am a full-stack web dev</Link>
        </div>
        <div>
          <div className='my-photo'>
            <Link to='/about' className='photo-link one'>about</Link>
            <Link to='/contact' className='photo-link two'>contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home

// <p className='home-p'>My name is John Weathers, pleased to e-meet you <span>🤝</span></p>