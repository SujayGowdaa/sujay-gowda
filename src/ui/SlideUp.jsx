/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function SlideUp({ children, className }) {
  return (
    <motion.div
      className={` ${className}`}
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
      {children}
    </motion.div>
  );
}
