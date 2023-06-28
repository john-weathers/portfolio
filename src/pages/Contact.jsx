import { useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/contact.css';

const Contact = () => {
  const { pageHeight } = useOutletContext();

  return (
    <div className='contact' style={{ height: pageHeight }}>
      <div className='container'>
        <h1 className='highlight'>Contact me.</h1>
        <div className='flex-container'>
          <div className='card-container'>
            <div className='card'>
              <a href='mailto: weathers.johnb@gmail.com' target='_blank'><FontAwesomeIcon icon={faEnvelope} size='xl'/>weathers.johnb@gmail.com</a>
            </div>
          </div>
          <div className='card-container'>
            <div className='card'>
              <a href='https://www.linkedin.com/in/john-weathers1/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size='xl'/>LinkedIn</a>
            </div>
          </div>
          <div className='card-container'>
            <div className='card'>
              <a href='https://github.com/john-weathers' target='_blank'><FontAwesomeIcon icon={faGithub} size='xl'/>GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact