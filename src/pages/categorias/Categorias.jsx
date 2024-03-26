import React, { useEffect, useState } from 'react'
import { NavBar } from '../../components/navBar/NavBar'
import { Row, Col } from 'react-bootstrap';
import { CategoriaCard } from '../../components/categoriaCard/CategoriaCard';
import './styleCategorias.css';
import api from '../../api/api';





export const Categorias = ({ categoria }) => {
    const [searchFilter, setSearchFilter] = useState('');
    const [data, setData] = useState([]);

     useEffect (  () => {
        const fetchData = async () => {
            try {
                const res = await api.get("/api/productos");
                setData(res.data);
               
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

       
         fetchData();
         console.log(data)

         
    }, []);

    
    const mostrarCategoria = data.filter(hero => hero.categoria === categoria);

    return (
        <div className='body'>
            <div><NavBar searchFilter={searchFilter} setSearchFilter={setSearchFilter} /></div>
            <div className='container'>
                <Row xs={1} md={2} lg={4}>
                    {
                        mostrarCategoria.map((hero) => {
                            return (
                                <Col key={hero.id}>
                                    <CategoriaCard hero={hero} />
                                </Col>
                            );
                        })
                    }
                </Row>
            </div>
        </div>
    );
};
