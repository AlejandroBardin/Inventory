import { createContext, useEffect, useState } from "react"
import api from "../api/api"


 export const ProductsProvider = createContext();


export const ProductsContext = ({ children }) => {
    const[productos, setProductos] = useState([]);
    
    
     
    const obtenerDatos = async () => {
        try {
          const response = await api.get('/api/productos');
          setProductos(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    const addProducto = async (producto) =>{
    console.log(producto)
    try {
        const response = await api.post('/api/productos', producto);
        
        setProductos([...productos, response.data]); 
        
      } catch (error) {
        console.log(error)
      }
    }

     const deleteProducto = async (id) =>{
      try {
        await api.delete(`/api/productos/${id}`);

        setProductos(productos.filter((producto) => producto.id !== id)); 
        
      } catch (error) {
        console.log(error)
      }
     };

     const updateProductos = async (producto) =>{
      try {
        await api.put(`/api/productos/${producto.id}`, producto); 
        
        await obtenerDatos(); 

      } catch (error) {
        
      }
     }


    useEffect( () => {
    obtenerDatos();
    } , []);  



  return ( 
   <ProductsProvider.Provider value={{ productos, addProducto, deleteProducto, updateProductos }}> 
        {children}
    </ProductsProvider.Provider>
  )
}
