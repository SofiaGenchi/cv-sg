import React, { useEffect } from "react";
import "./Portfolio.css";
import 'animate.css';


// Importación de imágenes
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img5.png";
import img6 from "../../assets/img/img6.png";
import img7 from "../../assets/img/img8.png";
import img8 from "../../assets/img/img9.png";
import img9 from "../../assets/img/img10.png";
import img10 from "../../assets/img/img11.png";




const projects = [
  {
    id: 1,
    title: "Estudio Inmobiliario",
    technologies: "ReactJS, CSS, Javascript, HTML",
    github: "https://github.com/SofiaGenchi/mc-estudio-inmobiliario",
    website: "https://www.mariainesestudioinmobiliario.com.ar",
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Adidas",
    technologies: "HTML5, SASS, React, Bootstrap, Firebase, React-Router-Dom, SweetAlert",
    github: "https://github.com/SofiaGenchi/adidas",
    website: "https://adidas-zeta.vercel.app/category/camisetas",
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Generador de QR",
    technologies: "HTML, CSS, Javascript",
    github: "https://github.com/SofiaGenchi/QRcode",
    website: "https://sofiagenchi.github.io/QRcode/",
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Gradient Color Generator",
    technologies: "HTML, CSS, JavaScript",
    github: "https://github.com/SofiaGenchi/Gradient-Color-Generator",
    website: "https://gradient-color-generator-seven.vercel.app/",
    imageUrl: img4,
  },
  {
    id: 5,
    title: "AI Image Generator",
    technologies: "HTML, CSS, Javascript, AI ChatGPT API",
    github: "https://github.com/SofiaGenchi/AI-Image-Generation",
    website: "https://ai-image-generation-rho.vercel.app/",
    imageUrl: img5,
  },
  {
    id: 6,
    title: "Calculador de propina",
    technologies: "HTML, CSS, Javascript",
    github: "https://github.com/SofiaGenchi/tip-calculator",
    website: "https://sofiagenchi.github.io/tip-calculator/",
    imageUrl: img6,
  },
  {
    id: 7,
    title: "Magnifico de La Limpieza",
    technologies: "HTML, CSS, Bootstrap",
    github: "#",
    website: "https://magnificodelalimpieza.com.ar",
    imageUrl: img7,
  },
  {
    id: 8,
    title: "Consultor del Clima",
    technologies: "HTML, CSS, Javascript, Fetch API, WeatherAPI",
    github: "https://github.com/SofiaGenchi/clima-app",
    website: "https://clima-app-mocha.vercel.app",
    imageUrl: img8,
  },
  {
    id: 9,
    title: "Biovida - Tienda de alimentos saludables",
    technologies: "HTML, CSS, SASS, Javascript",
    github: "https://github.com/SofiaGenchi/BioVida-Genchi",
    website: "https://sofiagenchi.github.io/BioVida-Genchi",
    imageUrl: img9,
  },
  {
    id: 10,
    title: "Gradient-Color-Generator",
    technologies: "HTML, CSS, Javascript",
    github: "https://github.com/SofiaGenchi/Gradient-Color-Generator",
    website: "https://gradient-color-generator-seven.vercel.app/",
    imageUrl: img10,
  }
];

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio">
        <h2 className="animate__animated animate__backInUp">My Portfolio</h2>
      </div>
      <div className="portfolio-grid">
        {projects.map((project) => (
         <div className="card" key={project.id}>
         <img src={project.imageUrl} alt="" />
         <div className="card__content">
           <p className="card__title">{project.title}</p>
           <p className="card__description">{project.technologies}</p>
           <div className="links">
           <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">/&#62;</a>
           <a href={project.website} target="_blank" rel="noopener noreferrer" className="website-link">www</a>
           </div>
         </div>
       </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
