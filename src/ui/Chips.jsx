/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Chips({ skills, title, center }) {
  return (
    <motion.div
      className={` flex flex-col gap-2 2xl:gap-4 ${
        center && 'justify-center text-center xs:text-left xs:justify-start'
      }`}
      initial={{
        y: 40,
        opacity: 0,
        transition: {
          staggerChild: 0.3,
        },
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <h4 className=' capitalize text-sm text-text-secondary md:text-base 2xl:text-lg'>
        {title}
      </h4>
      <div
        className={` flex gap-2 gap-y-3 flex-wrap 2xl:gap-4 2xl:gap-y-4 ${
          center && 'justify-center xs:justify-start'
        }`}
      >
        {skills.map((skill, i) => {
          return (
            <motion.span
              key={skill}
              className=' text-nowrap inline-block text-[10px] outline outline-[1px] outline-shadow text-text font-light px-[10px] py-[3px] capitalize md:text-xs 2xl:text-sm 2xl:px-3 2xl:py-1 backdrop-blur-custom'
              whileHover={{
                y: -3,
              }}
              initial={{
                y: 20,
                opacity: 0,
                transition: {
                  staggerChild: 0.3,
                },
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.1 * i,
                },
              }}
            >
              {skill}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
