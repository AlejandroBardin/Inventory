import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./styleNosotros.css";
import { Link } from 'react-router-dom'; // Importa Link desde 'react-router-dom'

const data = [
    {
        id: 1,
        name: "Alejandro Bardin",
        linkedin: "https://www.linkedin.com/in/ale-bardin/",
        github: "https://github.com/AlejandroBardin",
        instagram: "https://www.instagram.com/alejandro.bardin/",
        image: "/img/nosotros/alebardin.jpeg", // Sin 'public'
    },
    {
        id: 2,
        name: "Francisco Sanchez",
        linkedin: "",
        github: "",
        instagram: "https://www.instagram.com/fran_sanchez.96/",
        image: "/img/nosotros/fran.png", // Sin 'public'
    },
    {
        id: 3,
        name: "Felipe Gutierrez",
        linkedin: "",
        github: "",
        instagram: "https://www.instagram.com/felipegutierrezo0797/",
        image: "/img/nosotros/cris.png", // Sin 'public'
    },
];


const QuienesSomos = () => {
    return (
        <div className="container-QS">
            <h1 className="title-QS">Quiénes Somos</h1>
            <div className="cards-QS">
                {data.map((person) => (
                    <div key={person.id} className="card-QS">
                        <img className="image-QS" src={person.image} alt={person.name} />
                        <h2>{person.name}</h2>
                        <div className="links-QS">
                            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icon-QS" icon={faLinkedin} />
                            </a>
                            <a href={person.github} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icon-QS" icon={faGithub} />
                            </a>
                            <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="icon-QS" icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {/* Botón siempre centrado debajo de las cards */}
            <Link to="/" className="btn-back-to-home">Volver al Home</Link>
        </div>
    );
};


           
export default QuienesSomos;
