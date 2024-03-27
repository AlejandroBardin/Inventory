import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from "../../components/navBar/NavBar";
import { TablaProductos } from "../../components/tables/ProductTable";
import { FormsProductos } from "../../components/formProducts/FormsProducts";
import { UserTable } from "../../components/tables/UserTable";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const token = localStorage.getItem("token");
    if (!token) {
      // Si no hay token, redirigir al usuario al login
      navigate("/login");
    } else {
      // Aquí puedes realizar una verificación adicional del token si es necesario
      // Por ejemplo, verificar si el token es válido y si el usuario tiene permisos de administrador
      // Si no cumple con los requisitos de autenticación, redirigir al usuario al login
    }
  }, []);

  return (
    <>
      <div><NavBar /></div> 
      <h2>Administrador</h2>
      <Container >
          <Row>
              <Col>
                <FormsProductos />
              </Col>
              <Col>
                <TablaProductos />
              </Col>
          </Row>
          <Row>
            <Col>
              <UserTable users={users} setUsers={setUsers} />
            </Col>
          </Row>
      </Container>
    </>
  );
};
