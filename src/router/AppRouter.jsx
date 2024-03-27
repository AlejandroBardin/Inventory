import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { CategoriaPage } from '../components/categoriaPage/CategoriaPage';
import { Admin } from "../pages/Administrador/Admin"
import { LoginForm } from '../pages/LoginForm/LoginForm'; 
import { RegistroForm } from '../pages/RegistroForm/RegistroForm';
import { Home } from '../pages/home/Home';
import { Categorias } from '../pages/categorias/Categorias'; // Importa Categorias aquí
import QuienesSomos from '../pages/nosotros/Nosotros';



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:categoria" element={<Categorias />} /> 
        <Route path="/personaje/:heroId" element={<CategoriaPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registro" element={<RegistroForm />} />
        <Route path="/nosotros" element={<QuienesSomos />} />
        
      </Routes>
    </BrowserRouter>
  );
};
