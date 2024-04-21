/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function PageTitle({ title }) {
  return (
    <motion.h2
      className=' font-extrabold max-w-min mx-auto text-nowrap uppercase text-2xl w-full bg-gradient-to-r from-gold-light to-gold-dark text-transparent bg-clip-text animate-gradient xs:mr-auto xs:ml-0 xs:text-3xl animate-gradient'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      {title}
    </motion.h2>
  );
}
