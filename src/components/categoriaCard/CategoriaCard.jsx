import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styleCategoriaCard.css';
import { Link } from 'react-router-dom';


export const CategoriaCard = ({hero}) => {
    
  return (

    <div className="contenedor">
         <div className="card">
    <Card>
      
            <div className="card-header">
            <Card.Img src={hero.imagen} style={{ objectFit:"cover", height:"15rem", objectPosition: "center", }}/>
             </div>
      <Card.Body className="card-body">
        <Card.Title>{hero.name}</Card.Title>
        <Card.Text >

          <p >Cantidad: {hero.cantidad}</p> 
          <p>Precio: {hero.precio}</p> 

        </Card.Text>
        <Link className='btn btn-success' to={`/personaje/${hero._id}`}>Ver Mas</Link>
      </Card.Body>
    </Card>
        </div>
    </div>
    
  )
}
