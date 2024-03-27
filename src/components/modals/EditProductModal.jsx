import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const EditProductModal = ({ product, closeModal }) => {
    const [editedProduct, setEditedProduct] = useState({
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        _id: product._id,
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleSaveChanges = () => {
        const { name, description, price, quantity } = editedProduct;

        if (!name || !description || !price || !quantity) {
            setError('Por favor, complete todos los campos.');
            return;
        }

        // Puedes agregar más validaciones aquí según tus necesidades

        // Lógica para editar el producto (puede ser una llamada a una API, etc.)
        console.log('Producto editado:', editedProduct);

        // Cierra el modal después de editar el producto
        closeModal();
    };

    return (
        <Modal show={true} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Editar Producto
                    {error && <div className="alert alert-danger fs-5">{error}</div>}
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
                        value={editedProduct.name}
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
                        value={editedProduct.description}
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
                        value={editedProduct.price}
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
                        value={editedProduct.quantity}
                        onChange={handleInputChange}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={handleSaveChanges}>
                    Guardar Cambios
                </button>
                <button className="btn btn-secondary" onClick={closeModal}>
                    Cancelar
                </button>
            </Modal.Footer>
        </Modal>
    );
};
