
import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(localStorage.getItem('colorScheme') || 'original');

  useEffect(() => {
    document.body.style.backgroundColor = colorScheme === 'dark' ? '#000' : colorScheme === 'darkBlue' ? '#001f3f' : '#ffffff';
    localStorage.setItem('colorScheme', colorScheme);
  }, [colorScheme]);

  const toggleColorScheme = (scheme) => {
    setColorScheme(scheme);
  };

  return (
    <DarkModeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
