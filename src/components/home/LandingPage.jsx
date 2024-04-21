import Logo from '../../ui/Logo';
import Title from './Title';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className=' text-center flex justify-center items-center flex-col gap-4 xs:flex-row xs:text-left'>
      <motion.span
        // initial={{ opacity: 0, scale: 0.8 }}
        // animate={{ opacity: 1, scale: 1 }
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.3,
        }}
      >
        <Logo width={'w-[80px] md:w-[100px]'} />
      </motion.span>
      <motion.span
        // initial={{ opacity: 0, scale: 0.8 }}
        // animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.3,
        }}
      >
        <Title />
      </motion.span>
    </div>
  );
}
