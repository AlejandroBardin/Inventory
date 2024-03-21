import React, { useState, useEffect } from 'react';

import { NavbarDash } from '../navbarDash/NavbarDash';
import { CardDash } from '../cardDash/CardDash';

import { UserTable } from '../tables/UserTable';
import { TablaProductos } from '../tables/ProductTable';
import { CategoryTable } from '../tables/CategoryTable';

export const PanelDash = ({ Toggle }) => {
	const [users, setUsers] = useState([]);
	const [selectedTable, setSelectedTable] = useState('users');

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	const handleCardClick = (tableName) => {
		setSelectedTable(tableName);
		/* 		console.log(tableName); */
		setCurrentPage(1);
	};

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const renderTable = () => {
		switch (selectedTable) {
			case 'users':
				const indexOfLastItem = currentPage * itemsPerPage;
				const indexOfFirstItem = indexOfLastItem - itemsPerPage;
				const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

				const totalPages = Math.ceil(users.length / itemsPerPage);

				return (
					<div>
						<UserTable users={currentUsers} setUsers={setUsers} />
						<ul className="pagination">
							{Array.from({ length: totalPages }).map((_, index) => (
								<li
									key={index}
									className={`page-item ${
										currentPage === index + 1 ? 'active' : ''
									}`}
								>
									<button
										className="page-link"
										onClick={() => handlePageChange(index + 1)}
									>
										{index + 1}
									</button>
								</li>
							))}
						</ul>
					</div>
				);
			case 'products':
				// Lógica para la tabla de productos
				return <TablaProductos />;
			case 'categories':
				// Lógica para la tabla de categorías
				return <CategoryTable />;
			default:
				return null;
		}
	};

	return (
		<>
			<div className="px-3">
				<NavbarDash Toggle={Toggle} />
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div className="w-100" onClick={() => handleCardClick('users')}>
						<CardDash title={'Usuarios'} total={users.length} />
					</div>

					<div className="w-100" onClick={() => handleCardClick('products')}>
						<CardDash title={'Productos'} total={123} />
					</div>

					<div className="w-100" onClick={() => handleCardClick('categories')}>
						<CardDash title={'Categorias'} total={12} />
					</div>
				</div>
				{/* 
			{selectedTable == 'users' && <UserTable users={users} setUsers={setUsers} />}
			{selectedTable === 'products' && <TablaProductos />}
			{selectedTable === 'categories' && <CategoryTable />} */}
				{renderTable()}
			</div>
		</>
	);
};
