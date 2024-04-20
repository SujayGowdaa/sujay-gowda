/* eslint-disable react/prop-types */
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';

import StartEnd from './StartEnd';
import TypeLocation from './TypeLocation';

export default function AccordionHeader({
  isAccordionOpen,
  i,
  company,
  role,
  viewportWidth,
  start,
  end,
  type,
  location,
}) {
  return (
    <div
      className={` group flex justify-between items-center py-4 px-4 xs:py-5 xs:px-6 md:py-6 md:px-8 ${
        isAccordionOpen === i
          ? 'border-b-[1px] border-shadow shadow-xp'
          : 'border-y-[1px] border-shadow'
      }`}
    >
      <div className=' group flex items-center'>
        <div className=' flex flex-col gap-2 '>
          <h2
            className={` ${
              isAccordionOpen === i ? ' text-accent' : 'text-text'
            }  transition-colors duration-300 font-vietnam font-semibold capitalize text-sm group-hover:text-accent xs:text-base `}
          >
            {role}
          </h2>
          <h3 className=' capitalize text-text-secondary text-xs xs:text-base '>
            {company}
          </h3>
        </div>
      </div>

      <div className=' flex items-center gap-4 text-xs xs:text-sm md:gap-6 '>
        {viewportWidth > 786 && (
          <>
            <TypeLocation type={type} location={location} />
            <StartEnd start={start} end={end} />
          </>
        )}
        {viewportWidth > 560 && viewportWidth < 786 && (
          <StartEnd start={start} end={end} />
        )}
        <motion.span
          className={` ${
            isAccordionOpen === i ? ' outline-accent' : ' outline-shadow'
          } outline outline-[1px] p-1 rounded-full md:p-[6px] `}
          animate={{
            rotate: isAccordionOpen === i ? 180 : 0,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <IoIosArrowDown
            className={` group-hover:text-accent xs:text-xl transition-colors duration-300  ${
              isAccordionOpen === i ? 'text-accent' : 'text-text'
            }`}
          />
        </motion.span>
      </div>
    </div>
  );
}
