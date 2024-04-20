import { motion } from 'framer-motion';
import { qualifications } from '../qualification';

export default function CertificateMain() {
  return (
    <div className=' grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2xl:grid-cols-2'>
      {qualifications[0].main.map((qualification, i) => {
        const { course, institue, duration } = qualification;

        return (
          <motion.div
            className='outline outline-accent font-vietnam capitalize p-4 outline-[1px] backdrop-blur-custom shadow-card gap-4 flex flex-col xs:justify-between'
            key={i}
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
            <h3 className=' text-sm text-text font-semibold xs:text-base'>
              {course}
            </h3>
            <div className=' flex flex-col gap-1 xs:gap-2'>
              <h4 className=' text-xs text-accent xs:text-sm'>{institue}</h4>
              <div className=' text-[10px] text-text-secondary flex gap-1 xs:text-xs'>
                <span>{duration?.start}</span>
                <span>-</span>
                <span>{duration?.end}</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
