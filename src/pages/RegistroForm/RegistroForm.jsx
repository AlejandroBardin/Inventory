import React from 'react';
import './RegistroForm.css';
import { Link } from 'react-router-dom';

export const RegistroForm = () => {
  return (
           <div className='wrapper'>
        <form action="">
            <h1>Crear Usuario</h1>
            <div className="input-box">
                <input type="text" placeholder='Nombre y Apellido' maxlength= '18'  required />
                </div>
                <div className="input-box">
                <input type="text" placeholder='Usuario' maxlength= '18'  required />
                </div>
                <div className="input-box">
                <input type="password" placeholder='Contraseña' maxlength= '18' required />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Repita la Contraseña' maxlength= '18' required />
            </div>
                <div className="input-box">
                <input type="email" placeholder='Email address' maxlength= '35'  required />
                </div>
                <div className="input-box">
                <input type="number"  placeholder='Numero de Telefono' maxlength= '18'  required />
                </div>
        
            <div className="remember-forgot">
                <p><label><input type="checkbox" />Acepto los </label>
                <a href="#">Terminos & Condiciones</a></p>
            </div>
            <button type="submit">Crear Usuario</button>

            <div className="register-link">
            <p>Ya tienes una cuenta? <Link to='/LoginForm'>Iniciar sesión</Link></p>
            </div>
        </form>
    </div>
  )
}
