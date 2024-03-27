import React from 'react';
import { useParams } from 'react-router-dom';
import { heroes } from '../../data/heroesData';
import { NavBar } from '../navBar/NavBar';





export const CategoriaPage = () => {

    const {heroId} = useParams()
    const hero = heroes.find(h => heroId === h.id )
   
    
    


    
        
        

  return (

        <>

        <div><NavBar /></div> 

        <div className='d-flex align-item-center m-3'>
        <div>


            <img src={hero.imagen} alt={hero.producto}/>

        </div>
        
        </div>
        
        
        </> 
   
    
  )
}
