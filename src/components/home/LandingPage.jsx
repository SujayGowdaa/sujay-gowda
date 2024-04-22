import Logo from '../../ui/Logo';
import useViewPort from '../../utils/useViewPort';
import Title from './Title';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const { viewportWidth } = useViewPort();

  return (
    <div className=' text-center flex justify-center items-center flex-col gap-4 xs:flex-row xs:text-left'>
      <motion.span
        initial={
          viewportWidth < 480
            ? {
                opacity: 0,
                y: -100,
              }
            : {
                opacity: 0,
                x: -100,
              }
        }
        animate={
          viewportWidth < 480
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 1,
                x: 0,
              }
        }
        transition={{
          duration: 0.3,
        }}
      >
        <Logo width={'w-[80px] md:w-[100px]'} />
      </motion.span>
      <motion.span
        initial={
          viewportWidth < 480
            ? {
                opacity: 0,
                y: 100,
              }
            : {
                opacity: 0,
                x: 100,
              }
        }
        animate={
          viewportWidth < 480
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 1,
                x: 0,
              }
        }
        transition={{
          duration: 0.3,
        }}
      >
        <Title />
      </motion.span>
    </div>
  );
}
