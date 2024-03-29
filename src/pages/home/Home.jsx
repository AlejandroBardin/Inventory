import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components/navBar/NavBar';
import { Row, Col } from 'react-bootstrap';
import { CategoriaCard } from '../../components/categoriaCard/CategoriaCard';
import './styleHome.css';
import api from '../../api/api';
import Footer from '../../components/footer/Footer';







export const Home = ({ categoria }) => {
    const [searchFilter, setSearchFilter] = useState('');
    const [data, setData] = useState([]);

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
    }, []);



    let mostrarCategoria = data;
    if (categoria) {
        mostrarCategoria = data.filter(hero => hero.categoria === categoria);
    }

    const resultadosFiltrados = mostrarCategoria.filter(hero =>
        hero.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return (
        <div className='prex'>
            
            <NavBar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
            <div className='container main-wrapper'>

            

                <Row xs={1} md={2} lg={4}>
                    {resultadosFiltrados.map(hero => (
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
