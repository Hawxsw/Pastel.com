'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
interface IUser {
    id: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
}

interface IAuthContextType {
    user: IUser | null;
    login: (email: string, password: string) => Promise<boolean>;
    register: (userData: Omit<IUser, 'id' > & {password: string}) => Promise<boolean>;
    logout: () => void;
    updateProfile: (userData: Partial<IUser>) => Promise<boolean>;
}

const AuthContext = createContext<IAuthContextType | null>(null);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            if (email && password) {
                const userData = {
                    id: '1',
                    name: 'Willian Silva',
                    email: email,
                    phone: '(16) 99999-9999',
                    address: 'Rua Agua santa, 1066 - Franca - SP'
                }
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return false;
        }
    }

    const register = async (userData: Omit<IUser, 'id'> & {password: string}): Promise<boolean> => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const newUser = {
                id: Date.now().toString(),
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                address: userData.address
            }
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            return true;
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            return false;
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user')
    }

    const updateProfile = async (userData: Partial<IUser>): Promise<boolean> => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (user) {
                const updatedUser = {
                    ...user,
                    ...userData
                }
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            return false;
        }
    }
    
    return (
        <AuthContext.Provider value={{user, login, register, logout, updateProfile}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}