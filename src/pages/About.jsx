import { useState } from 'react';
import '../css/about.css';

const About = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className='about'>
      <div className='container'>
        <div className='summary'>
          <h1 className='highlight'>About me.</h1>
          <div className='sub-container'>
            <p>I started developing software in June 2022. I thoroughly enjoy programming and building software and see it as my natural vocation. 
              I am looking for a full-time position as a software developer/engineer with a company that can provide good growth potential. 
              My focus has been on full-stack web development using the MERN stack. I want to continue building/expanding my skillset as a developer and, being a quick learner, 
              I know I will provide great value for any organization that I work with. </p>
            <p>Prior to starting software development, the bulk of my work was in the legal field, which in my opinion helped jumpstart my learning. 
              For example, I believe reading documentation comes naturally to me in part because of the amount of legal research/analysis I have done, 
              both of which require a strong attention to detail. Also, both professions are very logic heavy. </p>
            <p>In addition, I am very familiar with working under tight deadlines (this is a constant in the legal field) 
              and have a track record of delivering as well as being a positive impact team member. 
              Finally, my experience working with an animal welfare focused cryptocurrency project shows my ability to work as a self-starter in a unique setting, 
              with minimal instruction, if needed.</p>
          </div>
        </div>
        <div className='resume' onMouseOver={() => setShowText(true)} onMouseOut={() => setShowText(false)} style={{ paddingRight: !showText ? 0 : 5 }}>
          <a href='/resume.pdf' target='_blank' style={{ borderRight: !showText ? 0 : '4px solid rgb(1, 40, 53)' }}><img src='/download.svg'/></a>
          {showText && <p>Download<br />Resume</p>}
        </div>
      </div>
    </div>
  )
}
export default About