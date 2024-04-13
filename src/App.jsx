import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
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
    <div
      className={` theme-${theme} w-screen h-screen bg-background flex flex-col gap-4 justify-center items-center`}
    >
      <h1 className='text-3xl font-bold text-text text-center '>SUJAY GOWDA</h1>
      <button
        onClick={() => setTheme((ps) => (ps === 'light' ? 'dark' : 'light'))}
        className=' capitalize text-accent font-bold'
      >
        change theme
      </button>
    </div>
  );
}
