import React from 'react';
import './Portfolio.css';

// Importación de imágenes
import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';
import img4 from '../../assets/img/img4.png';
import img5 from '../../assets/img/img5.png';
import img6 from '../../assets/img/img6.png';

const projects = [
  {
    id: 1,
    title: 'Estudio Inmobiliario',
    technologies: 'ReactJS, CSS, Javascript, HTML',
    github: 'https://github.com/SofiaGenchi/mc-estudio-inmobiliario',
    website: 'https://www.mariainesestudioinmobiliario.com.ar',
    imageUrl: img1,
  },
  {
    id: 2,
    title: 'Adidas',
    technologies: 'HTML5, SASS, React, Bootstrap, Firebase, React-Router-Dom, SweetAlert',
    github: 'https://github.com/SofiaGenchi/adidas',
    website: 'https://adidas-zeta.vercel.app/category/camisetas',
    imageUrl: img2,
  },
  {
    id: 3,
    title: 'Generador de QR',
    technologies: 'HTML, CSS, Javascript',
    github: 'https://github.com/SofiaGenchi/QRcode',
    website: 'https://sofiagenchi.github.io/QRcode/',
    imageUrl: img3,
  },
  {
    id: 4,
    title: 'Gradient Color Generator',
    technologies: 'HTML, CSS, JavaScript',
    github: 'https://github.com/SofiaGenchi/Gradient-Color-Generator',
    website: 'https://gradient-color-generator-seven.vercel.app/',
    imageUrl: img4,
  },
  {
    id: 5,
    title: 'AI Image Generator',
    technologies: 'HTML, CSS, Javascript, AI ChatGPT API',
    github: 'https://github.com/SofiaGenchi/AI-Image-Generation',
    website: 'https://ai-image-generation-rho.vercel.app/',
    imageUrl: img5,
  },
  {
    id: 6,
    title: 'Calculador de propina',
    technologies: 'MySQL, Express',
    github: 'https://github.com/SofiaGenchi/tip-calculator',
    website: 'https://sofiagenchi.github.io/tip-calculator/',
    imageUrl: img6,
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
                <p>{project.title}</p>
                <p>{project.technologies}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">/&#62;</a>
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="website-link">www</a>
              </div>
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;