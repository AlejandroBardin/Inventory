import { Container, Row, Col } from "react-bootstrap"
import { NavBar } from "../../components/navBar/NavBar"
import {TablaProductos} from "../../components/tables/ProductTable"
import { FormsProductos } from "../../components/formProducts/FormsProducts"
import { UserTable }from "../../components/tables/UserTable"
import { useState } from "react"





export const Admin = () => {
  const [users, setUsers] = useState([]);
  return (
    <>
    <div><NavBar /></div> 
    <h2>Administrador</h2>
    <Container>
        <Row>
            <Col>
            <FormsProductos/>
            </Col>
            <Col>
            <TablaProductos />
            </Col>
        </Row>
        <Row>
          <Col>
          <UserTable users={users} setUsers={setUsers}/>
          </Col>
        </Row>
    </Container>


</>

  )
}
