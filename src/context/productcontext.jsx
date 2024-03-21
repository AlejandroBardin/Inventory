import { createContext, useEffect, useState } from "react"
import axios from "axios";


const ProductsProvider = createContext();


const ProductosContext = ({ children }) => {
    const[productos, setProductos] = useState([]);
    
    
     
    const obtenerDatos = async () => {
        try {
          const response = await axios.get('http://localhost:8000/productos');
          setProductos(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    const addProducto = async (producto) =>{
    console.log(producto)
    try {
        const response = await axios.post('http://localhost:8000/productos', producto);
        
        setProductos([...productos, response.data]); 
        
      } catch (error) {
        console.log(error)
      }
    }

     const deleteProducto = async (id) =>{
      try {
        await axios.delete(`http://localhost:8000/productos/${id}`);

        setProductos(productos.filter((producto) => producto.id !== id)); 
        
      } catch (error) {
        console.log(error)
      }
     };

     const updateProductos = async (producto) =>{
      try {
        await axios.put(`http://localhost:8000/productos/${producto.id}`, producto); 
        
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

export default ProductosContext