import { NavLink, useLocation } from 'react-router-dom';
import { IoMdContrast } from 'react-icons/io';
import { useAppContext } from '../store/AppContext';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useAppContext();
  const [active, setActive] = useState({
    home: true,
    projects: false,
    experience: false,
    qualification: false,
    about: false,
    contact: false,
  });
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    switch (pathName) {
      case '/':
        setActive({
          home: true,
          projects: false,
          experience: false,
          qualification: false,
          about: false,
          contact: false,
        });
        break;
      case '/projects':
        setActive({
          home: false,
          projects: true,
          experience: false,
          qualification: false,
          about: false,
          contact: false,
        });
        break;
      case '/experience':
        setActive({
          home: false,
          projects: false,
          experience: true,
          qualification: false,
          about: false,
          contact: false,
        });
        break;
      case '/qualification':
        setActive({
          home: false,
          projects: false,
          experience: false,
          qualification: true,
          about: false,
          contact: false,
        });
        break;
      case '/about':
        setActive({
          home: false,
          projects: false,
          experience: false,
          qualification: false,
          about: true,
          contact: false,
        });
        break;
      case '/contact':
        setActive({
          home: false,
          projects: false,
          experience: false,
          qualification: false,
          about: false,
          contact: true,
        });
        break;

      default:
        break;
    }
  }, [pathName]);

  return (
    <header className=' shadow-custom border-b-2 border-background backdrop-blur-sm '>
      <nav className=' mx-auto max-w-[1200px]'>
        <ul className=' flex items-center tracking-wider justify-center select-none uppercase text-xs font-vietnam'>
          <li className=' w-full'>
            <NavLink
              className={` active:text-accent hover:text-text duration-150 transition-all px-16 py-8 inline-block w-full text-center text-text-secondary ${
                active.home && 'text-accent hover:text-accent'
              }`}
              to={'/'}
              onClick={() =>
                setActive({
                  projects: false,
                  experience: false,
                  qualification: false,
                  about: false,
                  home: true,
                })
              }
            >
              home
            </NavLink>
          </li>
          <li className=' w-full'>
            <NavLink
              className={` active:text-accent hover:text-text duration-150 transition-all px-16 py-8 inline-block w-full text-center text-text-secondary ${
                active.projects && 'text-accent hover:text-accent'
              }`}
              to={'/projects'}
              onClick={() =>
                setActive({
                  home: false,
                  experience: false,
                  qualification: false,
                  about: false,
                  projects: true,
                })
              }
            >
              projects
            </NavLink>
          </li>
          <li className=' w-full'>
            <NavLink
              className={` active:text-accent hover:text-text duration-150 transition-all px-16 py-8 inline-block w-full text-center text-text-secondary ${
                active.experience && 'text-accent hover:text-accent'
              }`}
              to={'/experience'}
              onClick={() =>
                setActive({
                  home: false,
                  projects: false,
                  qualification: false,
                  about: false,
                  experience: true,
                })
              }
            >
              experience
            </NavLink>
          </li>
          <li className=' w-full'>
            <NavLink
              className={` active:text-accent hover:text-text duration-150 transition-all px-16 py-8 inline-block w-full text-center text-text-secondary ${
                active.qualification && 'text-accent hover:text-accent'
              }`}
              to={'/qualification'}
              onClick={() =>
                setActive({
                  home: false,
                  projects: false,
                  experience: false,
                  about: false,
                  qualification: true,
                })
              }
            >
              qualification
            </NavLink>
          </li>
          <li className=' w-full'>
            <NavLink
              className={` active:text-accent hover:text-text duration-150 transition-all px-16 py-8 inline-block w-full text-center text-text-secondary ${
                active.about && 'text-accent hover:text-accent'
              }`}
              to={'/about'}
              onClick={() =>
                setActive({
                  home: false,
                  projects: false,
                  experience: false,
                  qualification: false,
                  about: true,
                })
              }
            >
              about
            </NavLink>
          </li>
          <li className=' w-full'>
            <NavLink
              className={` active:text-accent hover:text-text duration-150 transition-all px-16 py-8 inline-block w-full text-center text-text-secondary border-r border-shadow ${
                active.contact && 'text-accent hover:text-accent'
              }`}
              to={'/contact'}
              onClick={() =>
                setActive({
                  home: false,
                  projects: false,
                  experience: false,
                  qualification: false,
                  about: false,
                  contact: true,
                })
              }
            >
              contact
            </NavLink>
          </li>
          <li className='px-8 '>
            <IoMdContrast
              className={` text-2xl h-full block fill-text`}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
