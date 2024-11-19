import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { editUser } from "../../api/adminUsers.js";

export const EditUserModal = ({ user, closeModal }) => {
  const [editedUser, setEditedUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    rol: user.rol,
    _id: user._id,
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, rol, password, confirmPassword } = editedUser;

    if (!firstName || !lastName || !email || !rol) {
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

    if (password && password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error de validación",
        text: "Las contraseñas no coinciden. Por favor, verifica.",
      });
      return false;
    }

    if (password && password.length < 6) {
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
      await editUser(editedUser);
      Swal.fire({
        icon: "success",
        title: "Usuario actualizado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      closeModal();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al actualizar el usuario",
        text: "Inténtalo nuevamente.",
      });
    }
  };

  return (
    <Modal show onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={editedUser.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={editedUser.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              as="select"
              name="rol"
              value={editedUser.rol}
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
              placeholder="Nueva Contraseña (opcional)"
              value={editedUser.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={editedUser.confirmPassword}
              onChange={handleInputChange}
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

export default EditUserModal;
