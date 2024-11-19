import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductsProvider } from "../../context/ProductsContext";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { PropTypes } from "prop-types";

export const FormsProductos = ({ editarProductos, handleClose }) => {
  const { addProducto, updateProductos } = useContext(ProductsProvider);

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
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    const { name, precio, cantidad, descripcion, categoria } = producto;

    if (!name || !precio || !cantidad || !descripcion || !categoria) {
      Swal.fire({
        icon: "error",
        title: "Todos los campos son obligatorios",
        text: "Por favor, completa todos los campos antes de continuar.",
      });
      return;
    }

    // Validación de valores negativos
    if (Number(cantidad) < 0) {
      Swal.fire({
        icon: "error",
        title: "Cantidad inválida",
        text: "La cantidad no puede ser negativa.",
      });
      return;
    }

    if (Number(precio) < 0) {
      Swal.fire({
        icon: "error",
        title: "Precio inválido",
        text: "El precio no puede ser negativo.",
      });
      return;
    }

    // Agregar o editar producto
    if (editarProductos) {
      updateProductos(producto);
      handleClose();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto editado",
        showConfirmButton: false,
        timer: 1500,
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
    }

    // Reiniciar el formulario
    setProducto({
      id: uuidv4(),
      name: "",
      precio: "",
      cantidad: "",
      descripcion: "",
      categoria: "",
      imagen: "",
    });
  };

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
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            as="select"
            value={producto.categoria}
            onChange={handleChange}
            name="categoria"
          >
            <option value="">Seleccionar categoría</option>
            <option value="proteina">Proteína</option>
            <option value="creatina">Creatina</option>
            <option value="bcaa">BCAA</option>
            <option value="preentreno">Preentreno</option>
          </Form.Control>
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
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            value={producto.descripcion}
            onChange={handleChange}
            name="descripcion"
            placeholder="Descripción del producto"
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
          <Form.Label>Imagen (Opcional)</Form.Label>
          <Form.Control
            type="text"
            value={producto.imagen}
            onChange={handleChange}
            name="imagen"
            placeholder="Imagen del producto"
          />
        </Form.Group>

        {editarProductos ? (
          <Button type="submit" variant="warning">
            Editar Producto
          </Button>
        ) : (
          <Button type="submit" variant="success">
            Agregar Producto
          </Button>
        )}
      </Form>
    </>
  );
};

FormsProductos.propTypes = {
  editarProductos: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
};
