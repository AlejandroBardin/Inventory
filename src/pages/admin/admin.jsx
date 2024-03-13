import { Container, Row, Col } from "react-bootstrap"
import TablaProductos from "/Users/fsanc/Desktop/rolling_final_frontend/src/components/tables/ProductTable"
import FormProductos from "/Users/fsanc/Desktop/rolling_final_frontend/src/components/formProducts/formproducts"
import TablaUsuario from "/Users/fsanc/Desktop/rolling_final_frontend/src/components/tables/UserTable"

const Admin = () => {
  return (
    <>
    <h2>Administrador</h2>
    <Container>
        <Row>
            <Col>
            <FormProductos />
            </Col>
            <Col>
            <TablaProductos />
            </Col>
        </Row>
        <Row>
          <Col>
          <TablaUsuario />
          </Col>
        </Row>
    </Container>



</>

  )
}