import { NavLink, useLocation } from 'react-router-dom';
import { IoMdContrast } from 'react-icons/io';
import { useAppContext } from '../../store/AppContext';
import { useEffect, useState } from 'react';
import Logo from '../../ui/Logo';

export default function NavLinkContainer() {
  const { theme, setTheme, setIsNavOpen, setNavigation } = useAppContext();
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
    <header className='justify-center bg-glass shadow-custom-sm select-none border-l-2 border-background backdrop-blur-custom h-screen flex flex-col gap-6 lg:gap-8'>
      <div className=' px-8 cursor-default'>
        <Logo width={' w-[60px]'} />
      </div>
      <nav onClick={() => setIsNavOpen(false)}>
        <ul className=' flex flex-col tracking-wider uppercase text-sm font-vietnam lg:text-base'>
          <li className=' w-full'>
            <NavLink
              className={` w-full inline-block px-8 xs:py-3 font-medium py-2 pr-16 lg:py-4  active:text-accent duration-150 transition-all ${
                active.home
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
              }`}
              to={'/'}
              onClick={() => {
                setNavigation(1);
                setActive({
                  projects: false,
                  experience: false,
                  qualification: false,
                  about: false,
                  home: true,
                });
              }}
            >
              › home
            </NavLink>
          </li>
          <li className=' w-full'>
            <NavLink
              className={` w-full inline-block px-8 xs:py-3 font-medium py-2 pr-16 lg:py-4   active:text-accent duration-150 transition-all ${
                active.projects
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
              }`}
              to={'/projects'}
              onClick={() => {
                setNavigation(2);
                setActive({
                  home: false,
                  experience: false,
                  qualification: false,
                  about: false,
                  projects: true,
                });
              }}
            >
              › projects
            </NavLink>
          </li>
          <li className=' w-full'>
            <NavLink
              className={` w-full inline-block px-8 xs:py-3 font-medium py-2 pr-16 lg:py-4   active:text-accent duration-150 transition-all  ${
                active.experience
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
              }`}
              to={'/experience'}
              onClick={() => {
                setNavigation(3);
                setActive({
                  home: false,
                  projects: false,
                  qualification: false,
                  about: false,
                  experience: true,
                });
              }}
            >
              › experience
            </NavLink>
          </li>
          <li className=' w-full'>
            <NavLink
              className={` w-full text-nowrap inline-block px-8 xs:py-3 font-medium py-2 pr-16 lg:py-4   active:text-accent duration-150 transition-all  ${
                active.qualification
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
              }`}
              to={'/qualification'}
              onClick={() => {
                setNavigation(4);
                setActive({
                  home: false,
                  projects: false,
                  experience: false,
                  about: false,
                  qualification: true,
                });
              }}
            >
              › qualification
            </NavLink>
          </li>
          <li className=' w-full'>
            <NavLink
              className={` w-full inline-block px-8 xs:py-3 font-medium py-2 pr-16 lg:py-4   active:text-accent duration-150 transition-all  ${
                active.about
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
              }`}
              to={'/about'}
              onClick={() => {
                setNavigation(5);
                setActive({
                  home: false,
                  projects: false,
                  experience: false,
                  qualification: false,
                  about: true,
                });
              }}
            >
              › about
            </NavLink>
          </li>
          <li className=' w-full'>
            <NavLink
              className={` w-full inline-block px-8 xs:py-3 font-medium py-2 pr-16 lg:py-4   active:text-accent duration-150 transition-all ${
                active.contact
                  ? ' text-accent hover:text-accent'
                  : ' text-text-secondary hover:text-text'
              }`}
              to={'/contact'}
              onClick={() => {
                setNavigation(6);
                setActive({
                  home: false,
                  projects: false,
                  experience: false,
                  qualification: false,
                  about: false,
                  contact: true,
                });
              }}
            >
              › contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <span
        className='px-8 xs:py-3 py-2 pr-16 lg:py-4 cursor-pointer flex gap-2 items-center text-text font-medium uppercase text-sm font-vietnam lg:px-10 lg:text-base'
        onClick={(e) => {
          e.stopPropagation();
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        <IoMdContrast
          className={` transition-transform duration-300 text-base h-full block fill-text lg:text-xl  lg:ml-[-8px]  ${
            theme === 'light' ? ' rotate-0' : 'rotate-[180deg]'
          } `}
        />
        {`${theme === 'light' ? 'dark' : 'light'}`}
      </span>
    </header>
  );
}
