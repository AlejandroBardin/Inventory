import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import './styleProductDetail.css'; // Archivo CSS para los estilos

const ProductDetail = () => {
  const { id } = useParams(); // Extrae el ID del producto desde la URL
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await api.get(`/api/productos/${id}`); // Petición para un producto específico
        setProducto(res.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="product-info">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p className="product-price">Precio: ${producto.precio}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
