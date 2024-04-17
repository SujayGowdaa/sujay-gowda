/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { socialMedia } from '../socialMedia';
import PageTitleSecondary from './PageTitleSecondary';
import { MdOpenInNew } from 'react-icons/md';

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
      <div className=' flex gap-2 gap-y-1 justify-center flex-wrap xs:justify-start xs:gap-4'>
        {socialMedia.map((media) => {
          const { name, link } = media;

          return (
            <Link
              key={name}
              className=' text-text font-vietnam text-sm capitalize hover:text-accent xs:text-base'
              to={link}
              target='_blank'
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
