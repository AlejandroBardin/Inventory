import React from 'react';
import { Link } from 'react-router-dom';

export const CategoryTable = () => {
	return (
		<div>
			<div className="d-flex justify-content-between mb-3">
				<Link to="/" type="button" className="btn btn-primary mx-1">
					Inicio
				</Link>
				<button className="btn btn-primary btn btn-primary">
					Agregar Categorias
				</button>
				{/* {modalVisible && <AddUserModal closeModal={() => setModalVisible(false)} />} */}
			</div>
			<table className="table caption-top bg-white rounded mt-2">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Categoria</th>
						<th scope="col">Descripción</th>
						<th scope="col">Cantidad</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
	);
};
