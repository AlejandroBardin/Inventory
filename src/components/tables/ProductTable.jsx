import { useContext, useState } from "react";
import { ProductsProvider } from "../../context/ProductsContext";
import { Button, Table, Modal, Alert } from "react-bootstrap";
import { FormsProductos } from "../formProducts/FormsProducts";
import Swal from "sweetalert2";

export const TablaProductos = () => {
    const { productos, deleteProducto, updateProductos } = useContext(ProductsProvider);
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
        Swal.fire({
            icon: "success",
            title: "Producto eliminado",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const validateForm = (producto) => {
        const { name, precio, cantidad, descripcion, categoria, imagen } = producto;

        if (!name || !precio || !cantidad || !descripcion || !categoria || !imagen) {
            Swal.fire({
                icon: "error",
                title: "Todos los campos son obligatorios",
                text: "Por favor, completa todos los campos antes de continuar.",
            });
            return false;
        }

        if (Number(cantidad) < 0) {
            Swal.fire({
                icon: "error",
                title: "Cantidad inválida",
                text: "La cantidad no puede ser negativa.",
            });
            return false;
        }

        if (Number(precio) < 0) {
            Swal.fire({
                icon: "error",
                title: "Precio inválido",
                text: "El precio no puede ser negativo.",
            });
            return false;
        }

        return true;
    };

    const handleUpdate = (producto) => {
        if (!validateForm(producto)) return;

        updateProductos(producto);
        Swal.fire({
            icon: "success",
            title: "Producto actualizado con éxito",
            showConfirmButton: false,
            timer: 1500,
        });
        handleClose();
    };

    return (
        <>
            {showAlert && (
                <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    <Alert.Heading>¿Estás seguro?</Alert.Heading>
                    <p>¿Estás seguro de que deseas eliminar este producto?</p>
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
                                            <Button variant="warning" onClick={() => handleEdit(producto)}>
                                                Editar
                                            </Button>
                                            <Button variant="danger" onClick={() => confirmarEliminar(producto._id)}>
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Editar Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormsProductos
                                editarProductos={editarProductos}
                                handleClose={handleClose}
                                handleUpdate={handleUpdate}
                            />
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </>
    );
};
