import { createContext, useEffect, useState } from "react"
import axios from "axios";


export const ProductsProvider = createContext();


const ProductosContext = ({ children }) => {
    const[productos, setProductos] = useState([]);
    
    
     // Funcion para obtener los datos de la API GET
    const obtenerDatos = async () => {
        try {
          const response = await axios.get('http://localhost:8000/productos');
          setProductos(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    const addProducto = async (producto) =>{ /*creamos la funcion de guardar productos*/
    console.log(producto)
    try {
        const response = await axios.post('http://localhost:8000/productos', producto); /*agrega los productos en la base de datos*/
        
        setProductos([...productos, response.data]); /*actualizamos nuestros productos trayendo productos y enviandolos a response.data*/
        
      } catch (error) {
        console.log(error)
      }
    }

     const deleteProducto = async (id) =>{ /*funcion para eliminar producto*/
      try {
        await axios.delete(`http://localhost:8000/productos/${id}`);

        setProductos(productos.filter((producto) => producto.id !== id)); 
        
      } catch (error) {
        console.log(error)
      }
     };

     const updateProductos = async (producto) =>{
      try {
        await axios.put(`http://localhost:8000/productos/${producto.id}`, producto); /*actualiza los datos a la API*/
        
        await obtenerDatos(); /*los trae otra vez */

      } catch (error) {
        
      }
     }


    useEffect( () => {
    obtenerDatos();
    } , []);  



  return ( /*disponivilizamos funciones para que los children puedan captar*/
   <ProductsProvider.Provider value={{ productos, addProducto, deleteProducto, updateProductos }}> 
        {children}
    </ProductsProvider.Provider>
  )
}

export default ProductosContext