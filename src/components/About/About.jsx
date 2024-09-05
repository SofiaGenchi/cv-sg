import React from 'react';
import './About.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

const certifications = [
  {
    id: 1,
    title: 'Certificación en React',
    description: 'Certificación avanzada en ReactJS, cubriendo desde conceptos básicos hasta técnicas avanzadas.',
    technologies: 'ReactJS, Hooks, Redux',
    imageUrl: 'src/assets/img/cert1.png'
  },
  {
    id: 2,
    title: 'Certificación en CSS',
    description: 'Certificación en diseño y maquetación con CSS, incluyendo Flexbox y Grid.',
    technologies: 'CSS3, Flexbox, Grid',
    imageUrl: 'src/assets/img/cert2.png'
  },
  {
    id: 3,
    title: 'Certificación en JavaScript',
    description: 'Certificación en JavaScript moderno, incluyendo ES6+ y técnicas avanzadas.',
    technologies: 'JavaScript ES6+, Asíncrono',
    imageUrl: 'src/assets/img/cert3.png'
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
        <h3>Certificaciones y Conocimientos</h3>
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