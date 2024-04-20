import { useEffect, useState } from 'react';
import { work } from '../../workExperience';
import { motion } from 'framer-motion';

import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';

export default function Accordion() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const container = {
    hidden: { opacity: 0, y: 50, height: 0 },
    show: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className=' flex flex-col font-vietnam shadow-card backdrop-blur-custom'
      variants={container}
      initial='hidden'
      animate='show'
    >
      {work.map((xp, i) => {
        const { role, company, start, end, responsibilities, type, location } =
          xp;

        return (
          <motion.div
            className={` flex flex-col text-nowrap select-none cursor-pointer ${
              isAccordionOpen === i && ' border-y-[1px] border-accent'
            }`}
            key={company}
            onClick={() => setIsAccordionOpen(isAccordionOpen === i ? null : i)}
            variants={item}
          >
            <AccordionHeader
              isAccordionOpen={isAccordionOpen}
              i={i}
              company={company}
              role={role}
              viewportWidth={viewportWidth}
              start={start}
              end={end}
              type={type}
              location={location}
            />

            <AccordionContent
              viewportWidth={viewportWidth}
              isAccordionOpen={isAccordionOpen}
              responsibilities={responsibilities}
              start={start}
              end={end}
              type={type}
              location={location}
              i={i}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
