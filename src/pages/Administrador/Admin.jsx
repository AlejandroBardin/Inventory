import { Container, Row, Col } from "react-bootstrap"
import { NavBar } from "../../components/navBar/NavBar"
import {TablaProductos} from "../../components/tables/ProductTable"
import { FormsProductos } from "../../components/formProducts/FormsProducts"
import { UserTable }from "../../components/tables/UserTable"


export const Admin = () => {
  return (
    <>
    <NavBar/> 
    <Container>
        <Row>
            <Col>
            <FormsProductos/>
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
