import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../navBar/NavBar';
import api from '../../api/api';
import './styleCategoriaPage.css';

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

    if (!hero) {
        return (
            <div className="loading-container">
                <p>Cargando detalles del producto...</p>
            </div>
        );
    }

    return (
        <div className="categoria-page">
            <NavBar />
            <div className="product-detail-container">
                <div className="product-card">
                    <div className="product-image">
                        <img src={hero.imagen} alt={hero.producto} />
                    </div>
                    <div className="product-info">
                        <h1 className="product-name">{hero.name}</h1>
                        <p className="product-quantity">
                            <strong>Cantidad disponible:</strong> {hero.cantidad}
                        </p>
                        <p className="product-price">
                            <strong>Precio:</strong> ${hero.precio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
