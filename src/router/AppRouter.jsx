import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Home } from '../pages/home/Home';




export const AppRouter = () => {
  return (
    
    
    <BrowserRouter>
			
           

        <Routes>
					
       
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/*
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
				<Route path="/dashboard" element={<Dashboard />} /> */}
                
			</Routes>
		</BrowserRouter>
  )
}
