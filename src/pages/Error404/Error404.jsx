import React from 'react';
import './Error404.css';

// Importa la imagen
import error404Image from '../../img/error404.png';

export const Error404 = () => {
  return (
    <main className='fondo'>
      <div className="error-page">
        <div className="content-error">
          <img src={error404Image} alt="Error 404" />

          <h4>¡Ups! Página no encontrada</h4>
          <p>Lo sentimos, la página que estás buscando no existe. Si crees que algo está roto, por favor informa el problema.</p>

          <div className="btns">
            <a href="/">Ir al inicio</a>
            <a href="#">Informar un problema</a>
          </div>
        </div>
      </div>
    </main> 
  );
};