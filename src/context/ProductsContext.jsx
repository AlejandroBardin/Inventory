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
   
      const token = localStorage.getItem("token");

    try {
        const response = await api.post('/api/productos', producto, {
          headers: {
            'x-token': token,
          },
        });
        
        setProductos([...productos, response.data]); 
        
      } catch (error) {
        console.log(error)
      }
    }

     const deleteProducto = async (id) =>{

      const token = localStorage.getItem("token");
      
      try {
        await api.delete(`/api/productos/${id}`, 
        {
          headers: {
            'x-token': token,
          },
        });

        setProductos(productos.filter((producto) => producto._id !== id)); 
        
      } catch (error) {
        console.log(error)
      }
     };

     const updateProductos = async (producto) =>{

      const token = localStorage.getItem("token");
      
      try {   

        await api.put(`/api/productos/${producto.id}`, producto,
        {
          headers: {
            'x-token': token,
          },
        }
        
        ); 
        
         obtenerDatos(); 

      }
      
      catch (error) {
        console.log(error);
        
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