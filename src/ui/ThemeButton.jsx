import { IoMdContrast } from 'react-icons/io';
import { useAppContext } from '../store/AppContext';

export default function ThemeButton() {
  const { theme, setTheme } = useAppContext();
  return (
    <button
      className=' w-full px-8 xs:py-3 py-2 pr-16 cursor-pointer flex gap-2 items-center text-text font-medium uppercase text-sm font-vietnam xl:py-4 xl:px-10 xl:text-base'
      onClick={(e) => {
        e.stopPropagation();
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      <IoMdContrast
        className={` transition-transform duration-300 text-base h-full block fill-text xl:text-xl  xl:ml-[-8px]  ${
          theme === 'light' ? ' rotate-0' : 'rotate-[180deg]'
        } `}
      />
      {`${theme === 'light' ? 'dark' : 'light'}`}
    </button>
  );
}
