import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [userDetails, setUserDetails] = useState(null); // Specific to logged-in user
  const navigate = useNavigate();

  // Load userDetails for current user on mount/login
  useEffect(() => {
    if (user?.phone) {
      const profiles = JSON.parse(localStorage.getItem('userProfiles') || '{}');
      const detailsForUser = profiles[user.phone] || null;
      setUserDetails(detailsForUser);
    } else {
      setUserDetails(null);
    }
  }, [user]);

  // Save current user's details in localStorage under their phone number
  const saveUserDetails = (details) => {
    if (!user?.phone) return;

    const profiles = JSON.parse(localStorage.getItem('userProfiles') || '{}');
    profiles[user.phone] = details;
    localStorage.setItem('userProfiles', JSON.stringify(profiles));
    setUserDetails(details);
  };

  const login = (phone) => {
    const newUser = { phone, name: 'Powerlook User' };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    setUserDetails(null);
    localStorage.removeItem('user');
    navigate('/');  
  };

  return (
    <LoginContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn: !!user,
        userDetails,
        setUserDetails: saveUserDetails, // Save with phone association
        loggedInPhone: user?.phone,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
