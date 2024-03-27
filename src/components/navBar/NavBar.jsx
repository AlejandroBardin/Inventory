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
    setSearchFilter(event.target.value);
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Nombre</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Inicio</Nav.Link>
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
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Accesorios Deportivos" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleCategoriaSelect('accesorios-deportivos')}>Accesorios Deportivos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
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
              <Button style={{ marginLeft: '3px', position: "center", marginBottom: "8px" }} variant="outline-success">Search</Button>
            </Link>
            <Button style={{ marginLeft: '3px', position: "center", marginBottom: "8px" }} href="/login">Admin</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
