import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { MdMenu } from 'react-icons/md';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        
        
        <Navbar.Brand href="#">Nombre</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link href="#action1">Inicio</Nav.Link>
            
            {// Sección Suplementos
            }

            <NavDropdown title="Suplementos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Proteina</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                BCAA
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Creatina
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Pre-Entreno
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>


            {// Sección Accesorios deportivos
            }
      
            
            <NavDropdown title="Accesorios Deportivos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Proteina</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                BCAA
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Creatina
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Pre-Entreno
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>


            
            {/* Botón adicional
            
            <Nav.Link href="#action2">Preguntas Frecuentes</Nav.Link>

             */}
            
            
             
            {/* Botón deshabilitado
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
            */}
          </Nav>
          <Form className="d-flex" fluid>
            
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>

            <Button className='ml-2'>Login</Button>
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}
