import React from 'react';

const Search = ({ data, categoria, searchFilter }) => {
    let mostrarCategoria = data;
    if (categoria) {
        mostrarCategoria = data.filter(hero => hero.categoria === categoria);
    }

    const resultadosFiltrados = mostrarCategoria.filter(hero =>
        hero.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return resultadosFiltrados.map(hero => (
        <div key={hero._id}>
            {/* Aquí puedes renderizar cada elemento individual como desees */}
            <p>{hero.name}</p>
            {/* Añade el resto de la información que desees mostrar */}
        </div>
    ));
};

export default Search;
