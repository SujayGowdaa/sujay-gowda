/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { socialMedia } from '../socialMedia';

export default function FollowMe() {
  return (
    <div className=' flex gap-2 justify-center'>
      {socialMedia.map((media) => {
        const { name, link } = media;

        return (
          <Link
            key={name}
            className=' text-text font-vietnam text-sm capitalize hover:text-accent'
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
