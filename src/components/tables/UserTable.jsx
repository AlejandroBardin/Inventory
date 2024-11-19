import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { getUsers, delUser } from "../../api/adminUsers";
import Swal from "sweetalert2";
import { EditUserModal } from "../modals/EditUserModal";
import { AddUserModal } from "../modals/AddUserModal";

export const UserTable = ({ users, setUsers }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };
    fetchUsers();
  }, [setUsers]);
  

  const openEditModal = (user) => {
    setSelectedUser(user);
  };

  const openAddUserModal = () => {
    setModalVisible(true);
  };

  const handleDelete = async (userId) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await delUser(userId);
          Swal.fire({
            icon: "success",
            title: "Usuario eliminado con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error al eliminar el usuario",
            text: "Inténtalo nuevamente.",
          });
        }
      }
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-primary" onClick={openAddUserModal}>
          Agregar Usuarios
        </button>
        {modalVisible && <AddUserModal closeModal={() => setModalVisible(false)} />}
      </div>
      <div style={{ maxHeight: "400px", overflowY: "auto" }}>
        <table className="table caption-top bg-white rounded mt-2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Rol</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.rol}</td>
                <td>
                  {user.rol !== "admin" && (
                    <>
                      <button
                        className="btn btn-success mx-1"
                        onClick={() => openEditModal(user)}
                      >
                        <FaEdit size={20} />
                      </button>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={() => handleDelete(user._id)}
                      >
                        <MdDelete size={20} />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <EditUserModal
          user={selectedUser}
          closeModal={() => setSelectedUser(null)}
        />
      )}
    </>
  );
};
