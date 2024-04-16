/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { socialMedia } from '../socialMedia';

export default function FollowMe() {
  return (
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
  );
}
