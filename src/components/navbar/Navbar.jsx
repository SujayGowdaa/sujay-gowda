import { useAppContext } from '../../store/AppContext';
import Button from '../../ui/Button';
import NavLinkContainer from './NavLinkContainer';

export default function Navbar() {
  const { isNavOpen, setIsNavOpen } = useAppContext();

  return (
    <>
      <div
        className={` flex max-w-min  items-start fixed top-0 z-10 gap-6  transition-all duration-500 ${
          isNavOpen ? 'right-0' : 'right-[-220px] pointer-events-none'
        } `}
        onClick={() => setIsNavOpen(false)}
      >
        <div className=' mt-4 '>
          <Button
            className=' '
            type='circle'
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
        <NavLinkContainer />
      </div>
      {/* {isNavOpen && <div className=' w-screen h-screen'></div>} */}
    </>
  );
}
