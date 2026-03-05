import { createContext, FC, ReactNode, useContext } from 'react';
import { useLocalStorage } from 'react-use';
import { TRegisteredUser } from '@/shared/types/registered-user.ts';

interface IAuthContext {
    registerUser: (login: string, password: string) => void;
    loginUser: (login: string, password: string) => TRegisteredUser;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};

interface IProps {
    children: ReactNode;
}

const AuthProvider: FC<IProps> = ({ children }) => {
    const [users, setUsers] = useLocalStorage<TRegisteredUser>('users', []);

    const registerUser = (login: string, password: string) => {
        if (users) {
            setUsers([...users, { login, password, createAt: new Date() }]);
        }
    };

    const loginUser = (login: string, password: string) => {
        const user = users?.find((u) => u.login === login);
        if (!user) {
            throw new Error('User not found!');
        }
        if (user.password !== password) {
            throw new Error('Invalid password');
        }
        return user;
    };

    return (
        <AuthContext.Provider value={{ registerUser, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, useAuthContext };