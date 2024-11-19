import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { addUser } from "../../api/adminUsers.js";

export const AddUserModal = ({ closeModal }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rol: "user", // Valor por defecto
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, rol, password, confirmPassword } = user;

    if (!firstName || !lastName || !email || !rol || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error de validación",
        text: "Todos los campos son obligatorios.",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Error de validación",
        text: "Por favor, introduce un correo electrónico válido.",
      });
      return false;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error de validación",
        text: "Las contraseñas no coinciden.",
      });
      return false;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Error de validación",
        text: "La contraseña debe tener al menos 6 caracteres.",
      });
      return false;
    }

    return true;
  };

  const handleSaveChanges = async () => {
    if (!validateForm()) return;

    try {
      await addUser(user);
      Swal.fire({
        icon: "success",
        title: "Usuario agregado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      closeModal();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al agregar usuario",
        text: "Inténtalo nuevamente.",
      });
    }
  };

  return (
    <Modal show onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              placeholder="Nombre"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              placeholder="Apellido"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              as="select"
              name="rol"
              value={user.rol}
              onChange={handleInputChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="password"
              value={user.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirmar Contraseña"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Mostrar contraseña"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSaveChanges}>
          Guardar Cambios
        </Button>
        <Button variant="secondary" onClick={closeModal}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
