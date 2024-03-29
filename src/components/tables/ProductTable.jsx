import { useContext, useState } from "react";
import { ProductsProvider } from "../../context/ProductsContext";
import { Button, Table, Modal, Alert } from "react-bootstrap";
import { FormsProductos } from "../formProducts/FormsProducts";

export const TablaProductos = () => {
    const { productos, deleteProducto } = useContext(ProductsProvider);
    const [editarProductos, setEditarProductos] = useState(null);
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [productoIdToDelete, setProductoIdToDelete] = useState(null);

    const handleClose = () => {
        setShow(false);
        setShowAlert(false);
    };

    const handleEdit = (producto) => {
        setEditarProductos(producto);
        setShow(true);
    };

    const confirmarEliminar = (productoId) => {
        setProductoIdToDelete(productoId);
        setShowAlert(true);
    };

    const handleConfirmDelete = () => {
        deleteProducto(productoIdToDelete);
        setShowAlert(false);
    };

    return (
        <>
            {showAlert && (
                <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    <Alert.Heading>¿Estás seguro?</Alert.Heading>
                    <p>
                        ¿Estás seguro de que deseas eliminar este producto?
                    </p>
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleConfirmDelete} variant="danger">
                            Sí, eliminar
                        </Button>
                        <Button onClick={() => setShowAlert(false)} variant="outline-secondary">
                            Cancelar
                        </Button>
                    </div>
                </Alert>
            )}
            {productos.length === 0 ? (
                "No hay productos"
            ) : (
                <>
                    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                        {/* Contenedor con estilos CSS */}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.map((producto, index) => (
                                    <tr key={producto._id}>
                                        <td>{index + 1}</td>
                                        <td>{producto.name}</td>
                                        <td>{producto.precio}</td>
                                        <td>
                                            <Button variant="warning" onClick={() => handleEdit(producto)}>Editar</Button>
                                            <Button variant="danger" onClick={() => confirmarEliminar(producto._id)}>Eliminar</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Formulario de Edicion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> <FormsProductos editarProductos={editarProductos} handleClose={handleClose} /> </Modal.Body>
                    </Modal>
                </>
            )}
        </>
    );
};
