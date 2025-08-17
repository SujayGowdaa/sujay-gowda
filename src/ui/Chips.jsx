/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import SlideUpStaggerChildren from "./SlideUpStaggerChildren";

export default function Chips({ skills, title, center }) {
  return (
    <motion.div
      className={` flex flex-col gap-2 2xl:gap-4 ${
        center && "justify-center text-center xs:justify-start xs:text-left"
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
      <h4 className=" text-sm capitalize text-text-secondary md:text-base 2xl:text-lg">
        {title}
      </h4>
      <div
        className={` flex flex-wrap gap-2 gap-y-3 2xl:gap-4 2xl:gap-y-4 ${
          center && "justify-center xs:justify-start"
        }`}
      >
        {skills.map((skill, i) => {
          return (
            <SlideUpStaggerChildren
              key={skill}
              index={i}
              className=" inline-block text-nowrap px-[10px] py-[3px] text-[10px] font-light capitalize text-text outline outline-[1px] outline-shadow backdrop-blur-custom md:text-xs 2xl:px-3 2xl:py-1 2xl:text-sm"
            >
              {skill}
            </SlideUpStaggerChildren>
          );
        })}
      </div>
    </motion.div>
  );
}
