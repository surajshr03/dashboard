import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the shape of the authentication context
interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (email: string, password: string) => Promise<void>;
}

interface User {
    id: string;
    email: string;
    password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Check authentication on initial load
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                // Implement your token validation logic here
                const token = localStorage.getItem('authToken');
                if (token) {
                    // Validate token and fetch user data
                    const userData = await validateToken(token);
                    setUser(userData);
                }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setUser(null);
            }
        };

        checkAuthStatus();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            // Implement your login API call
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();

            // Store token and set user
            localStorage.setItem('authToken', data.token);
            setUser(data.user);
        } catch (error) {
            console.error('Login failed', error);
            throw error;
        }
    };

    const logout = () => {
        // Remove token and clear user
        localStorage.removeItem('authToken');
        setUser(null);
    };

    const register = async (email: string, password: string) => {
        try {
            // Implement your registration API call
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();

            // Store token and set user
            localStorage.setItem('authToken', data.token);
            setUser(data.user);
        } catch (error) {
            console.error('Registration failed', error);
            throw error;
        }
    };

    // Placeholder for token validation - replace with your actual validation logic
    const validateToken = async (token: string): Promise<User> => {
        const response = await fetch('/api/validate-token', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) {
            throw new Error('Invalid token');
        }

        return response.json();
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};