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
        className={` ${className} hover:shadow-btn  hover:bg-background group p-2 pointer-events-auto rounded-full outline outline-1 outline-shadow flex justify-center items-center ${
          position && '  active:shadow-btn-active backdrop-blur-custom '
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
          x:
            (position === 'left' && [2, -4]) ||
            (position === 'right' && [-2, 4]),
          transition: {
            repeat: Infinity,
            delay: 0.1,
            repeatType: 'mirror',
            duration: 0.3,
            ease: 'easeOut',
          },
        }}
        disabled={disable}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      >
        <span>
          <IoIosArrowForward
            className={` fill-text group-hover:fill-text  ${
              position === 'left' && ' rotate-180'
            } ${position === 'right' && ' rotate-0'} ${
              position && ' text-text-secondary'
            }`}
          />
        </span>
      </motion.button>
    );
}
