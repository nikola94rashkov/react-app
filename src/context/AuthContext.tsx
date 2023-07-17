import { useAuth } from '@/hooks/useAuth';
import { FC, createContext } from 'react';

export const AuthContext = createContext(null);

interface IAuth {
  children: React.ReactNode;
}

export const AuthProvider: FC<IAuth> = ({ children }) => {
  const user: any = useAuth();

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
