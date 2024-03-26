import React, { useState } from 'react';
import './RegistroForm.css';
import { Link } from 'react-router-dom';









export const RegistroForm = () => {

   
    const [firstname, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');

    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Usuairio Registrado")

    };


    
  return (
           <div className='wrapper'>
        
            <h1>Crear Usuario</h1>
            
        <form onSubmit={handleRegister}>

            <div className="input-box">
                <input type="text" 
                placeholder='Nombre y Apellido'  
                required value={firstname} onChange={(e) => setFirst(e.target.value)} />
                </div>
                <div className="input-box">
                <input type="text" placeholder='Usuario'
                   required 
                 value={lastName} onChange={(e) => setLast(e.target.value)} />
                </div>
                <div className="input-box">
                <input type="password" placeholder='Contraseña'
                  required 
                 value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Repita la Contraseña' 
                 required 
                value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            </div>
                <div className="input-box">
                <input type="email" placeholder='Email address' 
                 required 
                value={email} onChange={(e) => setEmail(e.target.value)}  />
                </div>
                
        
            <div className="remember-forgot">
                <p><label><input type="checkbox" />Acepto los </label>
                <a href="#">Terminos & Condiciones</a></p>
            </div>
            <button type="submit" value="registrarse">Crear Usuario</button>

            <div className="register-link">
            <p>Ya tienes una cuenta? <Link to='/Login'>Iniciar sesión</Link></p>
            </div>
        </form>
    </div>
  )
}
