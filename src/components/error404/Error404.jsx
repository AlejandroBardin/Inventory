import React from 'react';
import { Link } from 'react-router-dom';
import './styleError404.css';

const Error404 = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops, página no encontrada</h2>
        <p className="error-description">
          Parece que la página que estás buscando no existe. 
          Verifica la URL o vuelve al inicio.
        </p>
        <Link to="/" className="home-button">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default Error404;
