/* eslint-disable react/prop-types */
import { IoIosArrowForward } from 'react-icons/io';
import { useAppContext } from '../store/AppContext';

export default function Button({ type, onClick, position }) {
  const { isNavOpen } = useAppContext();

  if (type === 'circle')
    return (
      <button
        className={` group p-2 transition-all duration-100 bg-background rounded-full outline outline-1 outline-shadow flex justify-center items-center ${
          position && 'shadow-btn active:shadow-btn-active'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      >
        <IoIosArrowForward
          className={` group-hover:fill-accent fill-text transition-all duration-100 ${
            isNavOpen && !position ? 'rotate-180' : ' rotate-0'
          } ${position === 'left' && ' rotate-180'}`}
        />
      </button>
    );
}
