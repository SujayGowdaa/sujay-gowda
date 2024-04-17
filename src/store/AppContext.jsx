/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

export default function AppContext({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem('theme')) {
      setIsLoading(true);
      return localStorage.getItem('theme');
    } else {
      localStorage.setItem('theme', 'light');
      setIsLoading(true);
      return localStorage.getItem('theme');
    }
  });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navigation, setNavigation] = useState(() => {
    if (localStorage.getItem('currentPage')) {
      return Number(localStorage.getItem('currentPage'));
    }
    localStorage.setItem('currentPage', 1);
    return Number(localStorage.getItem('currentPage'));
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('currentPage', navigation);
    setIsLoading(false);
  }, [theme, navigation]);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        isNavOpen,
        setIsNavOpen,
        navigation,
        setNavigation,
        isLoading,
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
