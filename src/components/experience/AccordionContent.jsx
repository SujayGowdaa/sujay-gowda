/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion';

import TypeLocation from './TypeLocation';
import StartEnd from './StartEnd';

export default function AccordionContent({
  isAccordionOpen,
  i,
  viewportWidth,
  start,
  end,
  type,
  location,
  responsibilities,
}) {
  const padding =
    (viewportWidth < 480 && '16px') ||
    (viewportWidth > 480 && viewportWidth < 786 && '24px') ||
    (viewportWidth > 786 && '32px');

  const accParent = {
    hidden: {
      padding: 0,
      opacity: 0,
      height: 0,
    },
    show: {
      opacity: 1,
      height: 'auto',
      padding: padding,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      padding: 0,
      opacity: 0,
      height: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const accChildren = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isAccordionOpen === i && (
        <motion.div
          className=' flex flex-col bg-glass gap-2 p-4 xs:p-6 xs:gap-3 md:gap-4 md:p-8 box-content'
          variants={accParent}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          {viewportWidth < 786 && (
            <div className=' flex items-center gap-4 flex-wrap gap-y-2 mb-2'>
              {viewportWidth < 560 && (
                <>
                  <StartEnd start={start} end={end} />
                  <TypeLocation type={type} location={location} />
                </>
              )}
              {viewportWidth > 560 && viewportWidth < 786 && (
                <StartEnd start={start} end={end} />
              )}
            </div>
          )}
          {responsibilities.map((li, index) => {
            return (
              <motion.div
                className=' list-none text-wrap text-xs text-text leading-5 space-x-2 xs:text-base'
                key={index}
                variants={accChildren}
              >
                <span className=' w-[2px] h-auto'>›</span>
                <span>{li}.</span>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
