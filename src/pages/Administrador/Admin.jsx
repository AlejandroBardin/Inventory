import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavBar } from '../../components/navBar/NavBar';
import { TablaProductos } from '../../components/tables/ProductTable';
import { FormsProductos } from '../../components/formProducts/FormsProducts';
import { UserTable } from '../../components/tables/UserTable';
import { useNavigate } from 'react-router-dom';
import './styleAdmin.css';


export const Admin = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        } else {
            // Aquí puedes realizar cualquier otra lógica necesaria
        }
    }, []);

    return (
        <>
            <NavBar />
            <div className="admin-page-wrapper mb-3">
                <Container fluid>
                    <h2 className="text-center mt-4 mb-3">Administrador</h2>
                    <Row className="justify-content-center">
                        <Col lg={6} md={12} className="mb-4" >
                            <FormsProductos />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={6} md={12} className="mb-4">
                            <TablaProductos />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={6} md={12}>
                            <UserTable users={users} setUsers={setUsers} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
