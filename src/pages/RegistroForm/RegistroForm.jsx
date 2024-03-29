import React, { useState } from 'react';
import './RegistroForm.css';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';


export const RegistroForm = () => {
    const navigate = useNavigate();
    const [firstname, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("Usuario Registrado");

        const newUser = {
            firstName: firstname,
            lastName: lastName,
            email: email,
            password: password
        };

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            if (response.ok) {
                navigate('/login');
            } else {
                console.error('Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <div className='pre'>
            <div className='wrapper'>
                <h1>Crear Usuario</h1>
                <form onSubmit={handleRegister}>
                    <div className="input-box">
                        <input type="text" 
                            placeholder='Nombre'  
                            required 
                            value={firstname} 
                            onChange={(e) => setFirst(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="text" 
                            placeholder='Apellido'
                            required 
                            value={lastName} 
                            onChange={(e) => setLast(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="email" 
                            placeholder='Correo electrónico' 
                            required 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}  />
                    </div>
                    <div className="input-box">
                        <input type="password" 
                            placeholder='Contraseña'
                            required 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <input type="password" 
                            placeholder='Confirmar Contraseña' 
                            required 
                            value={confirm} 
                            onChange={(e) => setConfirm(e.target.value)} />
                    </div>
                    <button type="submit" value="registrarse">Crear Usuario</button>
                </form>
                <div className="register-link">
                    <p>¿Ya tienes una cuenta? <Link to='/login'>Iniciar sesión</Link></p>
                    <p><Link to='/'>Volver al Home</Link></p>
                </div>
            </div>
        </div>
    );
}
