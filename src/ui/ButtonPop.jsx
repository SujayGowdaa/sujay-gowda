/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
export default function ButtonPop({ children, className }) {
  return (
    <motion.span
      className={className}
      whileHover={{
        y: -4,
      }}
    >
      {children}
    </motion.span>
  );
}
