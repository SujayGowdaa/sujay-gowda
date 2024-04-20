import { useAppContext } from '../../store/AppContext';
import Button from '../../ui/Button';
import NavLinkContainer from './NavLinkContainer';

export default function Navbar() {
  const { isNavOpen, setIsNavOpen } = useAppContext();

  return (
    <>
      <div
        className={` flex max-w-min items-start fixed top-0 z-10 gap-6 transition-all duration-500 md:gap-10 lg:gap-12 ${
          isNavOpen
            ? 'right-0'
            : 'right-[-230px] lg:right-[-265px] pointer-events-none'
        } `}
        onClick={() => setIsNavOpen(false)}
      >
        <div
          className={` mt-6 xs:mt-8 sm:mt-10 md:mt-12 ${
            isNavOpen && ' bg-background rounded-full shadow-custom-sm '
          }`}
        >
          <Button type='circle' onClick={() => setIsNavOpen(!isNavOpen)} />
        </div>
        <NavLinkContainer />
      </div>
      {isNavOpen && (
        <div className=' fixed top-0 left-0 z-[9] overflow-hidden backdrop-blur-[3px] backdrop-contrast-25 backdrop-grayscale w-screen h-screen'></div>
      )}
    </>
  );
}
