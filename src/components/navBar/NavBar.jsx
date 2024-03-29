import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styleNavBar.css';

export const NavBar = ({ searchFilter, setSearchFilter }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleCategoriaSelect = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value); // Utiliza la función que actualiza el estado del filtro
  };

  

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Inventory</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto flex-grow-1 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link >
            <Link to="/" >Inicio</Link>
              </Nav.Link>
            <NavDropdown title="Suplementos" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/categorias/proteina" onClick={() => handleCategoriaSelect('proteina')}>
                  Proteina
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
              <Link to="/categorias/bcaa" onClick={() => handleCategoriaSelect('bcaa')}>
                  BCAA
              </Link>
              </NavDropdown.Item>
              
              <NavDropdown.Item>
              <Link to="/categorias/creatina" onClick={() => handleCategoriaSelect('creatina')}>
                  Creatina
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/categorias/preentreno" onClick={() => handleCategoriaSelect('preentreno')}>
                  Pre-Entreno
              </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Accesorios Deportivos" id="navbarScrollingDropdown" disabled>
              <NavDropdown.Item onClick={() => handleCategoriaSelect('accesorios-deportivos') } disabled>Accesorios Deportivos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link >
            <Link to="/nosotros" >Quienes somos</Link>
            </Nav.Link>
            <Nav.Link >
            <Link to="/error" >Contacto</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex" fluid>
            <Form.Control
              type="search"
              placeholder="Search"
              value={searchFilter}
              onChange={handleSearchChange}
              className="me-2"
              aria-label="Search"
            />
            <Link to={`/categorias/${categoriaSeleccionada}`} style={{ textDecoration: 'none' }}>
            {/* <Button style={{ marginLeft: '3px', position: "center", marginBottom: "8px" }} variant="outline-success " disabled>Search</Button> */}
            </Link>
            <Button style={{ marginLeft: '3px', position: "center", marginBottom: "8px" }} href="/login">Admin</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};