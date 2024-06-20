// AuthContext.tsx
import { router } from 'expo-router';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { OrganizationInterface, OrganizationType } from './organization-context';


// Mock data
// Mocked OrganizationType
const organizationType: OrganizationType = {
  id: 'org-type-1',
  title: 'Technology',
  description: 'Technology-focused organizations',
};

// Mocked OrganizationInterface
const organization: OrganizationInterface = {
  id: 'org-1',
  name: 'ABC Tech Inc.',
  contactPersonFullName: 'John Doe',
  OrganizationName: 'ABC Tech Inc.',
  email: 'john.doe@example.com',
  OrganizationType: organizationType,
  country: 'United States',
  contactPhone: '+1 123-456-7890',
  logoUrl: 'https://example.com/logo.png',
};

// Mocked User
const mockedUser: User = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
  email_verified: true,
  mobile: '+1 987-654-3210',
  mobile_verified: true,
  organization: organizationType,
  created_at: '2023-06-20T12:00:00Z',
  organizations_created: organizationType,
};

export default mockedUser;



export interface User {
  first_name: string,
  last_name: string,
  email: string,
  email_verified: boolean,
  mobile: string,
  mobile_verified: boolean,
  organization?: OrganizationType,
  created_at: string,
  organizations_created?: OrganizationType,
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null)
  const signIn = () => {
    // Implement sign-in logic here
    setIsAuthenticated(true);
    setUser(mockedUser)
    router.replace('(main_app)')
  };

  const signOut = () => {
    // Implement sign-out logic here
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
