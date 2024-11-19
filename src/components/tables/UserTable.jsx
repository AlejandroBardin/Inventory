import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { createUser } from "../../api/adminUsers";

export const AddUserModal = ({ closeModal }) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rol: "user", // Valor por defecto
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, rol, password, confirmPassword } = formState;

    if (!firstName || !lastName || !email || !rol || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error de validación",
        text: "Todos los campos son obligatorios.",
      });
      return false;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error de validación",
        text: "Las contraseñas no coinciden. Por favor, verifica.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await createUser(formState);
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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={formState.firstName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={formState.lastName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              as="select"
              name="rol"
              value={formState.rol}
              onChange={handleChange}
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
              placeholder="Contraseña"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={formState.confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Mostrar Contraseña"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
          <Button variant="secondary" onClick={closeModal} className="ms-2">
            Cancelar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
