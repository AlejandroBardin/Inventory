import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/navBar/NavBar';
import { Row, Col } from 'react-bootstrap';
import { CategoriaCard } from '../../components/categoriaCard/CategoriaCard';
import './styleCategorias.css'; // Asegúrate de importar el archivo CSS
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
    }, [categoria]);

    const mostrarCategoria = data.filter(hero => hero.categoria === categoria).filter(hero =>
        hero.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return (
        <div className='prex'>
            <NavBar searchFilter={searchFilter} setSearchFilter={setSearchFilter} /> {/* Pasa el estado del filtro y la función que lo actualiza */}
            <div className='container main-wrapper'>
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
