import { useAppContext } from '../../store/AppContext';
import Logo from '../../ui/Logo';
import NavigationLink from '../../ui/NavigationLink';
import ThemeButton from '../../ui/ThemeButton';
import { motion } from 'framer-motion';

export default function NavLinkContainer() {
  const { setIsNavOpen } = useAppContext();

  const navLink = {
    animate: {
      scale: 1.01,
      originX: -2,
      originY: 0,
      transition: {
        duration: 0.2,
        type: 'spring',
      },
    },
  };

  return (
    <motion.header className='justify-center bg-glass shadow-custom-sm select-none border-l-2 border-background backdrop-blur-custom h-screen flex flex-col gap-6 xl:gap-10'>
      <div className=' px-8'>
        <Logo width={' w-[60px]'} />
      </div>
      <nav onClick={() => setIsNavOpen(false)}>
        <ul className=' flex flex-col tracking-wider uppercase text-sm font-vietnam xl:text-base'>
          <motion.li variants={navLink} whileHover={'animate'}>
            <NavigationLink title={'home'} to={'/'} />
          </motion.li>
          <motion.li variants={navLink} whileHover={'animate'}>
            <NavigationLink title={'projects'} to={'/projects'} />
          </motion.li>
          <motion.li variants={navLink} whileHover={'animate'}>
            <NavigationLink title={'experience'} to={'/experience'} />
          </motion.li>
          <motion.li variants={navLink} whileHover={'animate'}>
            <NavigationLink title={'qualification'} to={'/qualification'} />
          </motion.li>
          <motion.li variants={navLink} whileHover={'animate'}>
            <NavigationLink title={'about'} to={'/about'} />
          </motion.li>
          <motion.li variants={navLink} whileHover={'animate'}>
            <NavigationLink title={'contact'} to={'/contact'} />
          </motion.li>
        </ul>
      </nav>
      <ThemeButton />
    </motion.header>
  );
}
