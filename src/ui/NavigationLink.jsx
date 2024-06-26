/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { motion } from 'framer-motion';

export default function NavigationLink({ title, to }) {
  const { setNavigation } = useAppContext();
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
  const [isHovered, setIsHovered] = useState(false);

  function handleNavClick(navLink) {
    if (navLink === 'home') {
      setNavigation(1);
      setActive({
        home: true,
        projects: false,
        experience: false,
        qualification: false,
        about: false,
        contact: false,
      });
    }
    if (navLink === 'projects') {
      setNavigation(2);
      setActive({
        home: false,
        projects: true,
        experience: false,
        qualification: false,
        about: false,
        contact: false,
      });
    }
    if (navLink === 'experience') {
      setNavigation(3);
      setActive({
        home: false,
        projects: false,
        experience: true,
        qualification: false,
        about: false,
        contact: false,
      });
    }
    if (navLink === 'qualification') {
      setNavigation(4);
      setActive({
        home: false,
        projects: false,
        experience: false,
        qualification: true,
        about: false,
        contact: false,
      });
    }
    if (navLink === 'about') {
      setNavigation(5);
      setActive({
        home: false,
        projects: false,
        experience: false,
        qualification: false,
        about: true,
        contact: false,
      });
    }
    if (navLink === 'contact') {
      setNavigation(6);
      setActive({
        home: false,
        projects: false,
        experience: false,
        qualification: false,
        about: false,
        contact: true,
      });
    }
  }

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
    <NavLink
      className={`w-full gap-2 flex text-nowrap px-8 xs:py-3 font-medium py-2 pr-16 xl:py-4 active:text-accent xl:gap-3 ${
        active[title]
          ? 'text-accent hover:text-accent'
          : 'text-text-secondary hover:text-text'
      }`}
      to={to}
      onClick={() => handleNavClick(title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        initial={{
          x: 0,
        }}
        animate={{
          x: isHovered && [2, -2],
          transition: {
            repeat: Infinity,
            delay: 0.1,
            repeatType: 'mirror',
            duration: 0.3,
            ease: 'easeOut',
          },
        }}
      >
        ›
      </motion.span>
      {title}
    </NavLink>
  );
}
