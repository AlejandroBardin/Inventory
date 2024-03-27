import { useContext, useState } from "react";
import { ProductsProvider } from "../../context/ProductsContext";
import { Button, Table, Modal } from "react-bootstrap";
import { FormsProductos } from "../formProducts/FormsProducts";



export const TablaProductos = () => {
  
  const { productos, deleteProducto } = useContext(ProductsProvider);

  const [editarProductos, setEditarProductos] = useState(null)
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  

  const handleEdit = (producto) =>{
    setEditarProductos(producto);
    setShow(true);
  }

  return (
    <>
      {productos.length === 0 ? (
        "No hay productos"
      ) : (
        <>
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
              {productos.map((producto) => (
               
                  <tr key={producto._id}>
                    <td>{producto._id}</td>
                    <td>{producto.name}</td>
                    <td>{producto.precio}</td>
                    <td>
                      <Button variant="warning" onClick={() => handleEdit(producto)}>Editar</Button>
                      <Button variant="danger" onClick={() => deleteProducto(producto._id)}>Eliminar</Button>
                    </td>
                  </tr>
                
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Edicion</Modal.Title>
        </Modal.Header>
        <Modal.Body> <FormsProductos editarProductos={editarProductos} handleClose= {handleClose} /> </Modal.Body> 
        
      </Modal>
        </>           
      )}
    </>
  );
};

