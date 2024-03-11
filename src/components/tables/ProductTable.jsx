import React from 'react';
import { Link } from 'react-router-dom';

export const ProductTable = () => {
	return (
		<>
			<div className="d-flex justify-content-between mb-3">
				<Link to="/" type="button" className="btn btn-primary mx-1">
					Inicio
				</Link>
				<button
					className="btn btn-primary btn btn-primary"
					/* 	onClick={openAddUserModal} */
				>
					Agregar Productos
				</button>
				{/* {modalVisible && <AddUserModal closeModal={() => setModalVisible(false)} />} */}
			</div>
			<table className="table caption-top bg-white rounded mt-2">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Producto</th>
						<th scope="col">Precio</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Descripcion</th>
						<th scope="col">Categoria</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{/* 	{users
						.filter((user) => user.rol !== 'admin')
						.map((user, index) => (
							<tr key={index}>
								<th scope="row">{index + 1}</th>
								<td>{user.firstName}</td>
								<td>{user.lastName}</td>
								<td>{user.email}</td>
								<td>{user.rol}</td>
								<td>
									<button
										className="btn btn-success mx-1"
										onClick={() => openEditModal(user)}
									>
										<FaEdit size={20} />
									</button>
									<button
										className="btn btn-danger mx-1"
										onClick={() => delUser(user._id)}
									>
										<MdDelete size={20} />
									</button>
								</td>
							</tr>
						))} */}
				</tbody>
			</table>
		</>
	);
};
