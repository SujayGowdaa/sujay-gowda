import { useAppContext } from '../../store/AppContext';
import Logo from '../../ui/Logo';
import NavigationLink from '../../ui/NavigationLink';
import ThemeButton from '../../ui/ThemeButton';

export default function NavLinkContainer() {
  const { setIsNavOpen } = useAppContext();

  return (
    <header className='justify-center bg-glass shadow-custom-sm select-none border-l-2 border-background backdrop-blur-custom h-screen flex flex-col gap-6 lg:gap-8'>
      <div className=' px-8'>
        <Logo width={' w-[60px]'} />
      </div>
      <nav onClick={() => setIsNavOpen(false)}>
        <ul className=' flex flex-col tracking-wider uppercase text-sm font-vietnam lg:text-base'>
          <li>
            <NavigationLink title={'home'} to={'/'} />
          </li>
          <li>
            <NavigationLink title={'projects'} to={'/projects'} />
          </li>
          <li>
            <NavigationLink title={'experience'} to={'/experience'} />
          </li>
          <li>
            <NavigationLink title={'qualification'} to={'/qualification'} />
          </li>
          <li>
            <NavigationLink title={'about'} to={'/about'} />
          </li>
          <li>
            <NavigationLink title={'contact'} to={'/contact'} />
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
