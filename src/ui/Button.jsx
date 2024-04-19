/* eslint-disable react/prop-types */
import { IoIosArrowForward } from 'react-icons/io';
import { useAppContext } from '../store/AppContext';
import { motion } from 'framer-motion';

export default function Button({
  type,
  onClick,
  position,
  className,
  disable,
}) {
  const { isNavOpen } = useAppContext();

  if (type === 'circle')
    return (
      <motion.button
        className={` ${className} hover:bg-background group p-2 pointer-events-auto rounded-full outline outline-1 outline-shadow flex justify-center items-center ${
          position &&
          ' transition-all duration-100 hover:shadow-btn active:shadow-btn-active backdrop-blur-custom '
        } ${disable && ' cursor-not-allowed'}`}
        animate={
          !position && {
            rotate: isNavOpen ? 0 : 180,
            transition: {
              duration: 0.3,
            },
          }
        }
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.1,
          },
        }}
        disabled={disable}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      >
        <IoIosArrowForward
          className={` fill-text group-hover:fill-text  ${
            position === 'left' && ' rotate-180'
          } ${position === 'right' && ' rotate-0'} ${
            position && ' text-text-secondary'
          }`}
        />
      </motion.button>
    );
}
