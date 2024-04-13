import { Link } from 'react-router-dom';
import { IoMdContrast } from 'react-icons/io';
import { useAppContext } from '../store/AppContext';

export default function Navbar() {
  const { setTheme } = useAppContext();

  return (
    <header className=' shadow-md outline-b border-background bg-background'>
      <nav>
        <ul className=' flex  items-center select-none uppercase text-xs font-vietnam'>
          <li className=' w-full'>
            <Link
              className=' px-8 py-4 inline-block w-full text-center text-text-secondary'
              to={'/'}
            >
              home
            </Link>
          </li>
          <li className=' w-full'>
            <Link
              className=' px-8 py-4 inline-block w-full text-center text-text-secondary'
              to={'/projects'}
            >
              projects
            </Link>
          </li>
          <li className=' w-full'>
            <Link
              className=' px-8 py-4 inline-block w-full text-center text-text-secondary'
              to={'/experience'}
            >
              experience
            </Link>
          </li>
          <li className=' w-full'>
            <Link
              className=' px-8 py-4 inline-block w-full text-center text-text-secondary'
              to={'/qualification'}
            >
              qualification
            </Link>
          </li>
          <li className=' w-full'>
            <Link
              className=' px-8 py-4 inline-block w-full text-center text-text-secondary'
              to={'/about'}
            >
              about
            </Link>
          </li>
          <li className=' w-full'>
            <Link
              className=' px-8 py-4 inline-block w-full text-center text-text-secondary border-r-2 outline-text/10'
              to={'/contact'}
            >
              contact
            </Link>
          </li>
          <li className='px-8 '>
            <IoMdContrast
              className=' text-2xl h-full block fill-text '
              onClick={() =>
                setTheme((ps) => (ps === 'light' ? 'dark' : 'light'))
              }
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
