import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SendMail() {
  return (
    <motion.div
      className=' relative w-full'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className=' h-[1px] bg-gradient-to-r from-gold-light to-gold-dark w-full absolute top-0 md:top-[11px]'></div>
      <Link
        to={'mailto:sujaygowda.dev@gmail.com'}
        className=' hover:text-accent text-text-secondary duration-300 transition-all left-[50%] translate-x-[-210%] bg-background absolute translate-y-[-50%] font-vietnam capitalize text-xs px-2 py-1 xs:translate-x-[-275%] md:translate-x-[-320%] md:translate-y-[-2px] md:text-sm'
        target='_blank'
      >
        send mail
      </Link>
    </motion.div>
  );
}
