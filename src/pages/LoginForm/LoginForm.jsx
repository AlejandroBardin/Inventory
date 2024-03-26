import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './LoginForm.css';


export const LoginForm = () => {
  return (
    
    <div className= "body">
    <div className='wrapper'>
        <form action="">
            <h1>Iniciar sesión</h1>
            <div className="input-box">
                <input type="text" placeholder='Usuario' maxlength= '18'  required />
                <FaUser className='icon' />
                </div>
                <div className="input-box">
                <input type="password" placeholder='Contraseña' maxlength= '18' required />
                <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Recuérdame</label>
                <a href="#">Olvidaste tu contraseña?</a>
            </div>
            <button type="submit">Iniciar sesión</button>

            <div className="register-link">
            <p>No tienes una cuenta? <Link to='/RegistroForm'>Registrate</Link></p>
            </div>
        </form>
    </div>
    </div>
  )
}
