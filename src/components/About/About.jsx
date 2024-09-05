import React from 'react';
import './About.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

const certifications = [
  {
    id: 1,
    title: 'React Frontend Development Program',
    description: 'React Frontend Development Certification. Duration: 27 weeks. August 17, 2022',
    technologies: 'HTML, CSS, Javascript, ReactJS, Firebase, Bootstrap, SASS, SEO',
    imageUrl: 'src/assets/certificate/certificadoreactjs.png'
  },
  {
    id: 2,
    title: 'Web Development Certification',
    description: 'Certification in Web Design and Development. Duration: 45 hours over 12 weeks. February 19, 2022',
    technologies: 'Search Engine Optimization (SEO), CSS, SCSS, Bootstrap, SASS, Flexbox, HTML, JavaScript',
    imageUrl: 'src/assets/certificate/certificadodesarrolloweb.png'
  },
  {
    id: 3,
    title: 'JavaScript Certification',
    description: 'Certification in Modern JavaScript, including ES6+ and Advanced Techniques. Duration: 40.5 hours over 8 weeks. April 23, 2022',
    technologies: 'JavaScript ES6+',
    imageUrl: 'src/assets/certificate/certificadojavascript.png'
  },
  {
    id: 4,
    title: 'Node.js Certification',
    description: 'Certification in JavaScript from Scratch with Node.js. Duration: 12 hours. February 13, 2023',
    technologies: 'JavaScript with Node.js',
    imageUrl: 'src/assets/certificate/certificadonodejs.jpg'
  },
  {
    id: 5,
    title: 'Excel Certification',
    description: 'Certification in Excel from Basic to Advanced. Topics include: Data Tables, Relative References, Absolute References, Functions, SUM, COUNT, COUNTA, COUNTIF, VLOOKUP, IF, Pivot Tables, Spreadsheets, Data Entry. Duration: 8 hours. August 15, 2024',
    technologies: 'Excel',
    imageUrl: 'src/assets/certificate/certificadoexcel.jpg'
  },
  {
    id: 6,
    title: 'Responsive Web Design Certification',
    description: 'Certification in Responsive Web Design. Duration: 300 hours of work. August 16, 2022',
    technologies: 'Responsive Web Design',
    imageUrl: 'src/assets/certificate/certificadoresponsive.png'
  },
  {
    id: 7,
    title: 'English Certification',
    description: 'Intermediate English Certification. Technical and theoretical knowledge of English. March 6, 2024',
    technologies: 'Intermediate English',
    imageUrl: 'src/assets/certificate/certificadoingles.png'
  },
  // Agrega más certificaciones según sea necesario
];

const About = () => {
  return (
    <div className="about">
      {/* Sección de introducción */}
      <div className="about-intro">
        <img
          src="src/assets/img/img7.jpg" // Reemplaza con la ruta de tu imagen
          alt="About Me"
          className="about-image"
        />
        <div className="about-text">
          <h2>Sofia Ailen Genchi</h2>
          <p>I'm actively seeking new opportunities. With a strong background in customer service and administration, I am also a certified ReactJS Frontend Developer. My freelance projects include work for real estate and cleaning companies. <br />I'm proficient in customer support, scheduling, tax payments, and advanced computer tools (PC, email, Microsoft Word, Excel). My web development skills cover CSS, HTML, SASS, SEO, JavaScript, Bootstrap, ReactJS, Firebase, MySQL, UML, and Java. <br />I'm a team player who loves learning and am available to start immediately, preferably in the mornings. I'm currently pursuing a Higher Technical Degree in Software Development.</p>
        </div>
      </div>

      {/* Sección de certificaciones y conocimientos */}
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