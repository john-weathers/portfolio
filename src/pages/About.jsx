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
              Computer science student with hands-on experience (2 years) in full-stack development and object-oriented programming,
              using multiple languages. I am making a career transition after discovering an untapped passion and aptitude for
              programming. I believe I can show, through my prior experience, transferrable skills, and references, that I already have a
              strong track record of being a positive contributor to organizations as a full-time professional and would make an excellent
              team member.
            </p>
            <p>
              Prior to being a developer I worked in both the legal and blockchain industries – my experience in these positions adds to my value as a software developer. 
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