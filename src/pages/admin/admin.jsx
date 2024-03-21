import { Container, Row, Col } from "react-bootstrap"
import { NavBar } from "../../components/navBar/NavBar"
import TablaProductos from "../../components/tables/ProductTable"
import FormProductos from "../../components/formProducts/formproducts"
import TablaUsuario from "../../components/tables/UserTable"


const Admin = () => {
  return (
    <>
    <div><NavBar /></div> 
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