import React from 'react'
import { NavBar } from '../../components/navBar/NavBar'
import { heroes } from '../../data/heroesData';
import {Row, Col} from 'react-bootstrap';
import { CategoriaCard } from '../../components/categoriaCard/CategoriaCard';
import './styleCategorias.css';






export const Categorias = ({categoria}) => {

    
    
    const mostrarCategoria = heroes.filter( hero => hero.categoria === categoria);
   

    

    

  return (
    <div className='body'>

    <div><NavBar /></div> 

    <div className='container'>
            <Row xs={1} md={2} lg={4}>
            {
                mostrarCategoria.map((hero) => {
                    return(

                        <Col key={hero.id}>

                            <CategoriaCard hero={hero}/>
                        
                        
                        </Col>

                    )
                })
            }

            </Row>


    </div>
    
    
    
   
    </div>
    )
    }
    
  
    
   


   
    

    
   
   


