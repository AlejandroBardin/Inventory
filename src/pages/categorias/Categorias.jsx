import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/navBar/NavBar';
import { Row, Col } from 'react-bootstrap';
import { CategoriaCard } from '../../components/categoriaCard/CategoriaCard';
import './styleCategorias.css';
import api from '../../api/api';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

export const Categorias = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const [data, setData] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/api/productos");
                setData(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [categoria]); // Asegúrate de volver a cargar los datos cuando la categoría cambie

    const mostrarCategoria = data.filter(hero => hero.categoria === categoria);

    return (
        <div className='body'>
            <NavBar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
            <div className='container'>
                <Row xs={1} md={2} lg={4}>
                    {mostrarCategoria.map(hero => (
                        <Col key={hero.id}>
                            <CategoriaCard hero={hero} />
                        </Col>
                    ))}
                </Row>
            </div>
            <Footer />
        </div>
    );
};
