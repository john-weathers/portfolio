import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import '../css/projects.css';

const projects = {
  fixerApp: [['fixer', 'app'], 'Full-stack MERN app for hiring repair professionals', 'https://fixerapp.johnweathers.dev', '#680982'],
  hotTopics: ['HotTopics', 'Full-stack web app, Reddit meets Snapchat', 'https://github.com/john-weathers/topics', '#f2440f'],
}

const Projects = () => {
  const [project, setProject] = useState([]);
  const { pageHeight } = useOutletContext();

  return (
    <div className='projects' style={{ height: pageHeight }}>
      <div className='container'>
        <h1 className='highlight'>Projects by me.</h1>
        <div className='flex-container'>
          <div className='card'>
            <button 
              onClick={() => setProject(projects.fixerApp)} 
              className={project[2] === projects.fixerApp[2] ? 'clicked destyled-btn part-1' : 'destyled-btn part-1'}
            >
              fixer
              <span className='part-2'>app</span>
            </button>
          </div>
          <div className='card'>
            <button 
              onClick={() => setProject(projects.hotTopics)} 
              className={project[2] === projects.hotTopics[2] ? 'clicked destyled-btn topics' : 'destyled-btn topics'} 
            >
              Hot
              <span className='topics-2'>Topics</span>
            </button>
          </div>
        </div>
        <div className={project?.length > 0 ? 'description show' : 'description hide'}>
          <p>{project[1]}</p>
          <a 
            href={project[3] ? project[2] : null} 
            target='_blank' 
            style={{ backgroundColor: project[3] ? project[3] : 'rgba(0, 0, 0, 0.2)', cursor: project[3] ? 'pointer' : 'default' }}
          >
            Go to project
          </a>
        </div>
      </div>
    </div>
  )
}
export default Projects