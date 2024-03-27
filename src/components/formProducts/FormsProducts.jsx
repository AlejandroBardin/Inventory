import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductsProvider } from "../../context/ProductsContext";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { PropTypes } from "prop-types";

export const FormsProductos = ({ editarProductos, handleClose }) => { 

  const { addProducto, updateProductos } =    useContext(ProductsProvider); 

  const [producto, setProducto] = useState({
    id: editarProductos ? editarProductos._id : uuidv4(),
    name: editarProductos ? editarProductos.name : "",
    precio: editarProductos ? editarProductos.precio : "",
    cantidad: editarProductos ? editarProductos.cantidad : "",
    descripcion: editarProductos ? editarProductos.descripcion : "",
    categoria: editarProductos ? editarProductos.categoria : "",
    imagen: editarProductos ? editarProductos.imagen : "",
  });

  const handleChange = (e) => {
    
    setProducto({
      ...producto ,
      [e.target.name]:
        e.target.value ,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("agregando productos");

    if(editarProductos){
      updateProductos(producto);
      handleClose();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto editado",
        showConfirmButton: false,
        timer: 1500,
      });
      setProducto({
      
       name: "",
       precio: "",
       cantidad: "",
       descripcion: "",
       categoria:"",
       imagen: "",
      });
    } else {
      
    addProducto(producto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false,
      timer: 1500,
    });

    setProducto({
   
      name: "",
      precio: "",
      cantidad: "",
      descripcion: "",
      categoria:"",
      imagen: "",
    });
  };
    }
   

  return (
    
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={producto.name}
            onChange={handleChange} 
            name="name"
            placeholder="Nombre del producto"
          />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            value={producto.categoria}
            onChange={handleChange} 
            name="categoria"
            placeholder="Categoria del producto"
          />
          </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="number"
            value={producto.cantidad}
            onChange={handleChange} 
            name="cantidad"
            placeholder="Cantidad del producto"
          />
          </Form.Group>

            <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            value={producto.descripcion}
            onChange={handleChange} 
            name="descripcion"
            placeholder="descripcion del producto"
          />



        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={producto.precio}
            onChange={handleChange}
            name="precio"
            placeholder="Precio del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            value={producto.imagen}
            onChange={handleChange}
            name="imagen"
            placeholder="Imagen del producto"
          />
        </Form.Group>
        {editarProductos ? (
          <Button type="submit" variant="warning"> Editar Producto </Button>
        ) : (
          <Button type="submit" variant="success"> Agregar Producto </Button>
        )}
        
      </Form>
    </>
  );
};

FormsProductos.propTypes = {
  editarProductos: PropTypes.object,
};
