import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './LoginForm.css';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const postLogin = async (email, password) => {
        try {
            const resp = await api.post('/api/login', { email, password });

            localStorage.setItem('token', resp.data.token);
            const user = {
                id: resp.data.id,
                firstName: resp.data.firstName,
                lastName: resp.data.lastName,
                email: resp.data.email,
                rol: resp.data.rol,
                avatar: resp.data.avatar,
                createdAt: resp.data.createdAt,
                updatedAt: resp.data.updatedAt,
            };

            localStorage.setItem('user', JSON.stringify(user));

            if (resp.data.rol === 'usuario') {
                navigate('/');
            } else {
                navigate('/admin');
            }

            console.log('Inicio de sesión exitoso:', resp.data.message);
        } catch (error) {
            console.log(error.response.data.message);
            setError(error.response.data.message);
            setTimeout(() => {
                setError('');
            }, 2000);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Por favor, complete todos los campos.');
            setTimeout(() => {
                setError('');
            }, 2000);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Por favor, introduce un correo electrónico válido.');
            setTimeout(() => {
                setError('');
            }, 2000);
            return;
        }

        postLogin(email, password);
    };

    return (
        <div className="pre">
            <div className='wrapper'>
                <form onSubmit={handleLogin}>
                    <h1>Iniciar sesión</h1>
                    {error && <div className="error-message">{error}</div>}
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder='Email'
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder='Contraseña'
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Recuérdame</label>
                        <a href="#">Olvidaste tu contraseña?</a>
                    </div>
                    <button type="submit">Iniciar sesión</button>
                    <div className="register-link">
                        <p>No tienes una cuenta? <Link to='/Registro'>Registrate</Link></p>
                    </div>
                    <div className="register-link">
                        <p> <Link to='/'>Volver al Home</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};
