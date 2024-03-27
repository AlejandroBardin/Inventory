import api from './api.js';
import Swal from 'sweetalert2';

/* Obtener todos los productos */
export const getProducts = async () => {
	try {
		const token = localStorage.getItem('token');

		const res = await api.get('/api/products', {
			headers: {
				'x-token': token,
			},
		});

		return res.data;
	} catch (error) {
		console.log(error);
	}
};

/* Agregar un nuevo producto */
export const addProduct = async (product) => {
	const { name, description, price, quantity } = product;

	try {
		const token = localStorage.getItem('token');
		await api.post(
			'/api/product-add',
			{
				name,
				description,
				price,
				quantity,
			},
			{
				headers: {
					'x-token': token,
				},
			}
		);
		return true;
	} catch (error) {
		console.log(error.response);
		if (error.response && error.response.data && error.response.data.message) {
			throw new Error(error.response.data.message);
		} else {
			throw new Error('Error al agregar producto');
		}
	}
};

/* Editar un producto */
export const editProduct = async ({ name, description, price, quantity, _id }) => {
	try {
		const token = localStorage.getItem('token');
		await api.put(
			`/api/product/${_id}`,
			{
				name,
				description,
				price,
				quantity,
				_id,
			},
			{
				headers: {
					'x-token': token,
				},
			}
		);
	} catch (error) {
		console.log(error);
	}
};

/* Eliminar un producto */
export const deleteProduct = async (id) => {
	try {
		const token = localStorage.getItem('token');

		const result = await Swal.fire({
			title: '¿Estás seguro?',
			text: '¡No podrás revertir esto!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminar',
		});

		if (result.isConfirmed) {
			const res = await api.delete(`/api/product/${id}`, {
				headers: {
					'x-token': token,
				},
			});

			Swal.fire('Eliminado!', 'El producto ha sido eliminado.', 'success');
		}
	} catch (error) {
		console.log(error);
		Swal.fire(
			'Error',
			'Ha ocurrido un error al intentar eliminar el producto.',
			'error'
		);
	}
};
