import { Container, Row, Col } from "react-bootstrap"
import { NavBar } from "../../components/navBar/NavBar"
import {TablaProductos} from "../../components/tables/ProductTable"
import {FormProductos} from "../../components/formProducts/formproducts"
import { UserTable }from "../../components/tables/UserTable"


export const Admin = () => {
  return (
    <>
    <div><NavBar /></div> 
    <h2>Administrador</h2>
    <Container>
        <Row>
            <Col>
            <FormProductos/>
            </Col>
            <Col>
            <TablaProductos/>
            </Col>
        </Row>
        <Row>
          <Col>
          <UserTable/>
          </Col>
        </Row>
    </Container>


</>

  )
}
