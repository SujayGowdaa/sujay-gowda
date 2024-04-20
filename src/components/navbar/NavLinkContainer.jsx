import { useAppContext } from '../../store/AppContext';
import Logo from '../../ui/Logo';
import NavigationLink from '../../ui/NavigationLink';
import ThemeButton from '../../ui/ThemeButton';
import { motion } from 'framer-motion';

export default function NavLinkContainer() {
  const { setIsNavOpen } = useAppContext();

  const navLink = {
    animate: {
<<<<<<< HEAD
      scale: 1.01,
=======
<<<<<<< HEAD
      scale: 1.01,
=======
      scale: 1.02,
>>>>>>> 39a3efb6f015ff62246e952d1d394056cfdf804e
>>>>>>> 9f829790216541b8113ef0795f85db7ce084af4f
      originX: -2,
      originY: 0,
      transition: {
        duration: 0.2,
        type: 'spring',
      },
    },
  };

  return (
<<<<<<< HEAD
    <motion.header className='justify-center bg-glass shadow-custom-sm select-none border-l-2 border-background backdrop-blur-custom h-screen flex flex-col gap-6 xl:gap-10'>
=======
<<<<<<< HEAD
    <motion.header className='justify-center bg-glass shadow-custom-sm select-none border-l-2 border-background backdrop-blur-custom h-screen flex flex-col gap-6 xl:gap-10'>
=======
    <header className='justify-center bg-glass shadow-custom-sm select-none border-l-2 border-background backdrop-blur-custom h-screen flex flex-col gap-6 xl:gap-8'>
>>>>>>> 39a3efb6f015ff62246e952d1d394056cfdf804e
>>>>>>> 9f829790216541b8113ef0795f85db7ce084af4f
      <div className=' px-8'>
        <Logo width={' w-[60px]'} />
      </div>
      <nav onClick={() => setIsNavOpen(false)}>
<<<<<<< HEAD
        <ul className=' flex flex-col tracking-wider uppercase text-sm font-vietnam xl:text-base'>
=======
<<<<<<< HEAD
        <ul className=' flex flex-col tracking-wider uppercase text-sm font-vietnam xl:text-base'>
=======
        <ul className=' flex flex-col tracking-wider uppercase text-sm font-vietnam xl:text-lg'>
>>>>>>> 39a3efb6f015ff62246e952d1d394056cfdf804e
>>>>>>> 9f829790216541b8113ef0795f85db7ce084af4f
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
<<<<<<< HEAD
    </motion.header>
=======
<<<<<<< HEAD
    </motion.header>
=======
    </header>
>>>>>>> 39a3efb6f015ff62246e952d1d394056cfdf804e
>>>>>>> 9f829790216541b8113ef0795f85db7ce084af4f
  );
}
