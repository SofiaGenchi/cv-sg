import React from 'react'
import './Portfolio.css'

const projects = [
    {
      id: 1,
      title: 'Estudio Inmobiliario',
      description: 'A brief description of project one.',
      technologies: 'ReactJS, CSS, Javascript, HTML',
      github: 'https://github.com/SofiaGenchi/mc-estudio-inmobiliario',
      website: 'https://www.mariainesestudioinmobiliario.com.ar',
      imageUrl: 'src/assets/img/img1.png'
    },
    {
      id: 2,
      title: 'Adidas',
      description: 'A brief description of project two.',
      technologies: 'HTML5, SASS, React, Bootstrap, Firebase, React-Router-Dom, SweetAlert',
      github: 'https://github.com/SofiaGenchi/adidas',
      website: 'https://adidas-zeta.vercel.app/category/camisetas',
      imageUrl: 'src/assets/img/img2.png'
    },
    {
      id: 3,
      title: 'Generador de QR',
      description: 'A brief description of project three.',
      technologies: 'HTML, CSS, Javascript',
      github: 'https://github.com/SofiaGenchi/QRcode',
      website: 'https://sofiagenchi.github.io/QRcode/',
      imageUrl: 'src/assets/img/img3.png'
    },
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of project one.',
      technologies: 'HTML, CSS, JavaScript',
      github: 'https://github.com/yourusername/project-one',
      website: 'https://project-one.com',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of project two.',
      technologies: 'React, Node.js',
      github: 'https://github.com/yourusername/project-two',
      website: 'https://project-two.com',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of project three.',
      technologies: 'MySQL, Express',
      github: 'https://github.com/yourusername/project-three',
      website: 'https://project-three.com',
      imageUrl: 'https://via.placeholder.com/300'
    }
  ];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div className="portfolio-item" key={project.id}>
            <div className="portfolio-image" style={{ backgroundImage: `url(${project.imageUrl})` }}>
              <div className="portfolio-overlay">
                <p>{project.description}</p>
                <p>Technologies: {project.technologies}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">/&#62;</a>
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="website-link">www</a>
              </div>
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio