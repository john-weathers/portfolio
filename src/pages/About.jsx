import { useOutletContext } from 'react-router-dom';
import '../css/about.css';

const About = () => {
  const { pageHeight } = useOutletContext();

  return (
    <div className='about' style={{ height: pageHeight }}>
      <div className='container'>
        <div className='summary'>
          <h1 className='highlight'>About me.</h1>
          <div className='sub-container'>
            <p>
              I am a highly motivated web developer looking for an entry-level/junior position with growth potential. 
              I have experience both in the front end and back end, so I am open to roles focusing on any part of the stack. Please see the projects 
              section of this website for some examples of work I've done.
            </p>
            <p>
              Prior to being a developer I worked in both the legal and blockchain industries – my experience in these positions add to my value as a software developer. 
              The legal field is incredibly logic and detail focused where you must be well-versed in research/analysis/reading (legal) documentation. 
              You must also be accustomed to working under immense pressure with tight deadlines. 
              The blockchain industry requires a self-starter who can thrive no matter what, even when guidance is minimal and waters are uncharted.
            </p>
            <p>
              If you are interested, you can download my resume below.
            </p>
          </div>
        </div>
        <div className='resume'>
          <a href='/resume.pdf' target='_blank'><img src='/download.svg'/></a>
          <div className='flex-container'>
            <span className='emoji'>👈</span>
            <span className='word'>Resume</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About