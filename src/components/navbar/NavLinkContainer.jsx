import { NavLink, useLocation } from 'react-router-dom';
import { IoMdContrast } from 'react-icons/io';
import { useAppContext } from '../../store/AppContext';
import { useEffect, useState } from 'react';
import Logo from '../../ui/Logo';

export default function NavLinkContainer() {
  const { theme, setTheme, setIsNavOpen } = useAppContext();
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
    <header className='justify-center bg-glass shadow-custom-sm select-none border-l-2 border-background backdrop-blur-custom h-screen flex flex-col gap-8'>
      <div className=' px-8 cursor-default'>
        <Logo width={' w-[60px]'} />
      </div>
      <nav
        className=' flex flex-col gap-8 '
        onClick={() => setIsNavOpen(false)}
      >
        <ul className=' flex flex-col tracking-wider uppercase text-sm font-vietnam'>
          <li className=' w-full'>
            <NavLink
              className={` w-full inline-block px-8 font-medium py-2 pr-16 active:text-accent duration-150 transition-all ${
                active.home
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
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
              className={` w-full inline-block px-8 font-medium py-2 pr-16  active:text-accent duration-150 transition-all ${
                active.projects
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
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
              className={` w-full inline-block px-8 font-medium py-2 pr-16  active:text-accent duration-150 transition-all  ${
                active.experience
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
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
              className={` w-full inline-block px-8 font-medium py-2 pr-16  active:text-accent duration-150 transition-all  ${
                active.qualification
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
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
              className={` w-full inline-block px-8 font-medium py-2 pr-16  active:text-accent duration-150 transition-all  ${
                active.about
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
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
              className={` w-full inline-block px-8 font-medium py-2 pr-16  active:text-accent duration-150 transition-all ${
                active.contact
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
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
        </ul>
      </nav>
      <span
        className=' px-8 p-4 cursor-pointer  flex gap-2 items-center text-text uppercase text-sm font-vietnam'
        onClick={(e) => {
          e.stopPropagation();
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        {`${theme === 'light' ? 'dark' : 'light'}`}
        <IoMdContrast
          className={` transition-transform duration-300 text-base h-full block fill-text ${
            theme === 'light' ? ' rotate-0' : 'rotate-[180deg]'
          } `}
        />
      </span>
    </header>
  );
}
