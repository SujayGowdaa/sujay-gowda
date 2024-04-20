/* eslint-disable react/prop-types */
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> 39a3efb6f015ff62246e952d1d394056cfdf804e
>>>>>>> 9f829790216541b8113ef0795f85db7ce084af4f

export default function Chips({ skills, title, center }) {
  return (
    <div
      className={` flex flex-col gap-2 2xl:gap-4 ${
        center && 'justify-center text-center xs:text-left xs:justify-start'
      }`}
    >
      <h4 className=' capitalize text-sm text-text-secondary md:text-base 2xl:text-lg'>
        {title}
      </h4>
      <div
        className={` flex gap-2 gap-y-3 flex-wrap 2xl:gap-4 2xl:gap-y-4 ${
          center && 'justify-center xs:justify-start'
        }`}
      >
        {skills.map((skill) => {
          return (
            <motion.span
              key={skill}
              className=' text-nowrap inline-block text-[10px] outline outline-[1px] outline-shadow text-text font-light px-[10px] py-[3px] capitalize md:text-xs 2xl:text-sm 2xl:px-3 2xl:py-1 backdrop-blur-custom'
              whileHover={{
                y: -3,
              }}
            >
              {skill}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
