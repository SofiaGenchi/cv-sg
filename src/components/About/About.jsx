import React from 'react';
import './About.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

// Importación de imágenes
import img7 from '../../assets/img/img7.jpg';
import certificadoreactjs from '../../assets/certificate/certificadoreactjs.png';
import certificadodesarrolloweb from '../../assets/certificate/certificadodesarrolloweb.png';
import certificadojavascript from '../../assets/certificate/certificadojavascript.png';
import certificadonodejs from '../../assets/certificate/certificadonodejs.jpg';
import certificadoexcel from '../../assets/certificate/certificadoexcel.jpg';
import certificadoresponsive from '../../assets/certificate/certificadoresponsive.png';
import certificadoingles from '../../assets/certificate/certificadoingles.png';

const certifications = [
  {
    id: 1,
    title: 'React Frontend Development Program',
    description: 'React Frontend Development Certification. Duration: 27 weeks. August 17, 2022',
    technologies: 'HTML, CSS, Javascript, ReactJS, Firebase, Bootstrap, SASS, SEO',
    imageUrl: certificadoreactjs
  },
  {
    id: 2,
    title: 'Web Development Certification',
    description: 'Certification in Web Design and Development. Duration: 45 hours over 12 weeks. February 19, 2022',
    technologies: 'Search Engine Optimization (SEO), CSS, SCSS, Bootstrap, SASS, Flexbox, HTML, JavaScript',
    imageUrl: certificadodesarrolloweb
  },
  {
    id: 3,
    title: 'JavaScript Certification',
    description: 'Certification in Modern JavaScript, including ES6+ and Advanced Techniques. Duration: 40.5 hours over 8 weeks. April 23, 2022',
    technologies: 'JavaScript ES6+',
    imageUrl: certificadojavascript
  },
  {
    id: 4,
    title: 'Node.js Certification',
    description: 'Certification in JavaScript from Scratch with Node.js. Duration: 12 hours. February 13, 2023',
    technologies: 'JavaScript with Node.js',
    imageUrl: certificadonodejs
  },
  {
    id: 5,
    title: 'Excel Certification',
    description: 'Certification in Excel from Basic to Advanced. Topics include: Data Tables, Relative References, Absolute References, Functions, SUM, COUNT, COUNTA, COUNTIF, VLOOKUP, IF, Pivot Tables, Spreadsheets, Data Entry. Duration: 8 hours. August 15, 2024',
    technologies: 'Excel',
    imageUrl: certificadoexcel
  },
  {
    id: 6,
    title: 'Responsive Web Design Certification',
    description: 'Certification in Responsive Web Design. Duration: 300 hours of work. August 16, 2022',
    technologies: 'Responsive Web Design',
    imageUrl: certificadoresponsive
  },
  {
    id: 7,
    title: 'English Certification',
    description: 'Intermediate English Certification. Technical and theoretical knowledge of English. March 6, 2024',
    technologies: 'Intermediate English',
    imageUrl: certificadoingles
  },
  // Agrega más certificaciones según sea necesario
];

const About = () => {
  return (
    <div className="about">
      <div className="animate__animated animate__backInRight about-intro">
        <img
          src={img7}
          alt="About Me"
          className="about-image"
        />
        <div className="about-text">
          <h2>Sofia Ailen Genchi</h2>
          <p>I am a certified ReactJS Frontend Developer actively seeking new opportunities. I have completed freelance projects for real estate and cleaning companies.<br />I possess skills in customer support, scheduling, and advanced computer tools, as well as web development technologies including CSS, HTML, SASS, JavaScript, Bootstrap, ReactJS, Firebase, and MySQL.<br />Currently pursuing a Higher Technical Degree in Software Development; I thrive in collaborative environments and am available to start immediately.</p>
        </div>
      </div>
      <div className="about-certifications">
        <h3>Certifications and Skills</h3>
        <div className="certifications-grid">
          {certifications.map(certification => (
            <div className="certification-item" key={certification.id}>
              <div className="certification-text">
                <h4>{certification.title}</h4>
                <p>{certification.description}</p>
                <p>Technologies: {certification.technologies}</p>
              </div>
              <img
                src={certification.imageUrl}
                alt={certification.title}
                className="certification-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;