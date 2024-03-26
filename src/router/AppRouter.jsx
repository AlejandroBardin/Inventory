import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Categorias } from '../pages/categorias/Categorias';
import { CategoriaPage } from '../components/categoriaPage/CategoriaPage';
import { Admin } from "../pages/Administrador/Admin"
import { LoginForm } from '../pages/LoginForm/LoginForm'; 
import { RegistroForm } from '../pages/RegistroForm/RegistroForm';





export const AppRouter = () => {
  return (
    
    
    <BrowserRouter>
			
           

        <Routes>
					
      
        <Route path="/" element={<Categorias categoria="proteina"/>} />
        <Route path="/personaje/:heroId" element={<CategoriaPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/registro" element={<RegistroForm/>} />
        



  
        
        </Routes>
		</BrowserRouter>
  )
  }
