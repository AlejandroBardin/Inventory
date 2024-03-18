import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styleCategoriaCard.css';
import { Link } from 'react-router-dom';


export const CategoriaCard = ({hero}) => {
    
  return (

    <div class="contenedor">
         <div class="card">
    <Card>
      
            <div class="card-header">
            <Card.Img src={hero.imagen} style={{ objectFit:"cover", height:"15rem", objectPosition: "center", }}/>
             </div>
      <Card.Body class="card-body">
        <Card.Title>{hero.producto}</Card.Title>
        <Card.Text >

          <p >Cantidad: {hero.cantidad}</p> 
          <p>Precio: {hero.precio}</p> 

        </Card.Text>
        <Link className='btn btn-success' to={`/personaje/${hero.id}`}>Ver Mas</Link>
      </Card.Body>
    </Card>
        </div>
    </div>
    
  )
}
