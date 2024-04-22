/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function SlideUpStaggerChildren({ children, index, className }) {
  return (
    <motion.span
      className={className}
      whileHover={{
        y: -4,
      }}
      initial={{
        y: 10,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.1 * index,
        },
      }}
    >
      {children}
    </motion.span>
  );
}
