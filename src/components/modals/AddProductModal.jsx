import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const AddProductModal = ({ closeModal }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        quantity: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSaveChanges = () => {
        const { name, description, price, quantity } = product;

        if (!name || !description || !price || !quantity) {
            setError('Por favor, complete todos los campos.');
            return;
        }

        // Aquí puedes realizar cualquier validación adicional según tus necesidades

        // Lógica para guardar el producto (puede ser una llamada a una API, etc.)
        console.log('Producto a guardar:', product);

        // Cierra el modal después de guardar el producto
        closeModal();
    };

    return (
        <Modal show={true} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Agregar Producto
                    {error && <div className="alert alert-danger">{error}</div>}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Descripción
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Precio
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                        Cantidad
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleInputChange}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={handleSaveChanges}>
                    Guardar Producto
                </button>
                <button className="btn btn-secondary" onClick={closeModal}>
                    Cancelar
                </button>
            </Modal.Footer>
        </Modal>
    );
};
