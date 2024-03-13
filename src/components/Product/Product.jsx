import { useContext } from "react";
import Proptypes from "prop-types";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { ProductsProvider } from "../../context/ProductosContext";

const Productos = () => {
    const { productos } = useContext(ProductsProvider);

return (

    <>
      <h1>Componente de Productos</h1>

      <Container>               
        {productos.length === 0  ? (
          <h2>No hay nada para mostrar</h2>   
        ) : (
          <Row>
            {productos.map(                     
              (
                producto 
              ) => (
                <>
                  <Col xs={12} lg={3} md={4} sm={6}>
                    <Card style={{ width: "18rem" }} key={producto.id}>
                      <Card.Img variant="top" src={producto.imagen} />
                      <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>{producto.precio}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )
            )}
          </Row>
        )}
      </Container>
    </>
  );
};

Productos.prototype = {  productos: Proptypes.array};

export default Productos;
