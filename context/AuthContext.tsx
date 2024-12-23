// import React, { createContext, useEffect, useState } from 'react';

// // Define the shape of the authentication context
// interface AuthContextType {
//     user: User | null;
//     login: (email: string, password: string) => Promise<void>;
//     logout: () => void;
//     register: (email: string, password: string, phone: string, firstName: string, lastName: string) => Promise<void>;
// }

// interface User {
//     id: string;
//     email: string;
//     password: string;
//     phone: string;
//     firstName: string;
//     lastName: string;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [user, setUser] = useState<User | null>(null);

//     // Check authentication on initial load
//     useEffect(() => {
//         const storedUser = localStorage.getItem('authUser');
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }
//     }, []);

//     const login = async (email: string, password: string) => {
//         const storedUser = localStorage.getItem('authUser');

//         if (storedUser) {
//             const user: User = JSON.parse(storedUser);
//             if (user.email === email && user.password === password) {
//                 setUser(user);
//             } else {
//                 throw new Error('Login failed');
//             }
//         } else {
//             throw new Error('User not found');
//         }
//     };

//     const logout = () => {
//         localStorage.removeItem('authUser');
//         setUser(null);
//     };

//     const register = async (email: string, password: string, phone: string, firstName: string, lastName: string) => {
//         const newUser: User = {
//             id: crypto.randomUUID(),
//             email,
//             password,
//             phone,
//             firstName,
//             lastName
//         };
//         localStorage.setItem('authUser', JSON.stringify(newUser));
//         setUser(newUser);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout, register }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContext;

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (email: string, password: string, phone: string, firstName: string, lastName: string) => Promise<void>;
}

interface User {
    id: string;
    email: string;
    password: string;
    phone: string;
    firstName: string;
    lastName: string;
}

const api = axios.create({
    baseURL: 'https://192.168.1.253',
    headers: {
        'Content-Type': 'application/json'
    }
});

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const checkAuthStatus = async () => {
            const token = localStorage.getItem('authToken');
            if (token) {
                try {
                    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const { data } = await api.post('/auth/validate-token');
                    setUser(data);
                } catch {
                    localStorage.removeItem('authToken');
                    delete api.defaults.headers.common['Authorization'];
                    setUser(null);
                }
            }
        };

        checkAuthStatus();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const { data } = await api.post('/auth/login', { email, password });
            localStorage.setItem('authToken', data.token);
            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            setUser(data.user);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        delete api.defaults.headers.common['Authorization'];
        setUser(null);
    };

    const register = async (email: string, password: string, phone: string, firstName: string, lastName: string) => {
        try {
            const { data } = await api.post('/auth/register', {
                email,
                password,
                phone,
                firstName,
                lastName
            });
            localStorage.setItem('authToken', data.token);
            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            setUser(data.user);
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;