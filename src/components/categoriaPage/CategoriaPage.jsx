import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../navBar/NavBar';
import api from '../../api/api';

export const CategoriaPage = () => {
    const { heroId } = useParams();
    const [hero, setHero] = useState(null);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const res = await api.get(`/api/productos/${heroId}`);
                setHero(res.data);
            } catch (error) {
                console.error("Error fetching hero:", error);
            }
        };

        fetchHero();
    }, [heroId]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <div className='d-flex align-item-center m-3'>
                <div>
                    {hero ? (
                        <>
                            <img src={hero.imagen} alt={hero.producto} />
                            <p>{hero.name}</p>
                            <p>Cantidad: {hero.cantidad}</p>
                            <p>Precio: {hero.precio}</p>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};
