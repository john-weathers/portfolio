import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/projects.css';

const projects = {
  fixerApp: [['fixer', 'app'], 'Full-stack MERN app for hiring repair professionals', '/fixerapp', '#680982'],
  comingSoon: ['coming soon...', 'This project and description is coming soon...', '/comingSoon', null],
}

const Projects = () => {
  const [project, setProject] = useState([]);

  return (
    <div className='projects'>
      <div className='container'>
        <h1 className='highlight'>Projects by me.</h1>
        <div className='flex-container'>
          <div className='card'>
            <button 
              onClick={() => setProject(projects.fixerApp)} 
              className={project[2] === '/fixerapp' ? 'clicked destyled-btn part-1' : 'destyled-btn part-1'}
            >
              fixer
              <span className='part-2'>app</span>
            </button>
          </div>
          <div className='card'>
            <button onClick={() => setProject(projects.comingSoon)} className={project[2] === '/comingSoon' ? 'clicked destyled-btn' : 'destyled-btn'} >coming soon...</button>
          </div>
        </div>
        {project?.length > 0 && (
          <div className='description'>
            {/*Array.isArray(project[0]) ? (
              <h2>{project[0][0]}<span>{project[0][1]}</span></h2>
            ) : (
              <h2>{project[0]}</h2>
            )*/}
            <p>{project[1]}</p>
            <a 
              href={project[3] ? project[2] : null} 
              target='_blank' 
              style={{ backgroundColor: project[3] ? project[3] : 'rgba(0, 0, 0, 0.2)', cursor: project[3] ? 'pointer' : 'default' }}
            >
              Go to project
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
export default Projects