/* eslint-disable react/prop-types */
import { IoIosArrowForward } from 'react-icons/io';
import { useAppContext } from '../store/AppContext';

export default function Button({ type, onClick, position, className }) {
  const { isNavOpen } = useAppContext();

  if (type === 'circle')
    return (
      <button
        className={` ${className} bg-transparent hover:bg-background group p-2 pointer-events-auto transition-all duration-100 rounded-full outline outline-1 outline-shadow flex justify-center items-center ${
          position && 'shadow-btn active:shadow-btn-active'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      >
        <IoIosArrowForward
          className={` group-hover:fill-accent fill-text transition-all duration-100 ${
            isNavOpen && !position ? 'rotate-180 fill-accent' : ' rotate-0'
          } ${position === 'left' && ' rotate-180'}`}
        />
      </button>
    );
}
