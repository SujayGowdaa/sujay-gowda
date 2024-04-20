/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { socialMedia } from '../socialMedia';
import PageTitleSecondary from './PageTitleSecondary';
import { MdOpenInNew } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function FollowMe({ usage }) {
  return (
    <div className=' flex flex-col gap-2 xs:gap-4'>
      <div className=' flex gap-2 items-center justify-center xs:justify-start'>
        {usage === 'about' ? (
          <>
            <PageTitleSecondary title={'follow me'} />
            <MdOpenInNew className=' text-xl text-accent xs:text-2xl' />
          </>
        ) : (
          <div className=' text-text-secondary flex items-center gap-1 '>
            <span className=' text-sm  xs:text-base'>follow me</span>
            <MdOpenInNew className=' text-xs text-text-secondary xs:text-base' />
          </div>
        )}
      </div>
      <div className=' flex gap-2 gap-y-1 justify-center flex-wrap xs:justify-start xs:gap-4 lg:gap-6'>
        {socialMedia.map((media, i) => {
          const { name, link } = media;

          return (
            <motion.span
              key={name}
              whileHover={{
                y: -3,
              }}
              initial={{
                y: 10,
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
                  delay: 0.1 * i,
                },
              }}
            >
              <Link
                className=' text-text font-vietnam text-sm capitalize hover:text-accent xs:text-base'
                to={link}
                target='_blank'
              >
                {name}
              </Link>
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
