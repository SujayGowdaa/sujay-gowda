/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

export default function AppContext({ children }) {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    } else {
      localStorage.setItem('theme', 'light');
      return localStorage.getItem('theme');
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(Context);

  if (!context)
    throw new Error('Please use context within the context provider.');

  return context;
};
