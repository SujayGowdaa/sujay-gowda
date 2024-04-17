import { MdOpenInNew, MdOutlineOpenInNew } from 'react-icons/md';
import { qualifications } from '../qualification';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Certificate() {
  const [isCertificateHover, setIsCertificateHover] = useState(null);

  return (
    <div className=' grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:grid-cols-4'>
      {qualifications[1].certificates.map((certificate) => {
        const { course, issuedAt, issuedBy, id, link } = certificate;

        return (
          <div
            className='relative transition-all basis-full duration-300 '
            key={id}
            onMouseEnter={() => setIsCertificateHover(id)}
            onMouseLeave={() => setIsCertificateHover(null)}
          >
            {isCertificateHover === id && (
              <Link to={link} target='_blank'>
                <div className=' gap-1 absolute top-0 left-0 h-full text-text w-full bg-glass backdrop-blur-custom z-[1] flex justify-center items-center cursor-pointer font-medium capitalize font-vietnam text-sm outline outline-[1px] outline-accent active:text-accent self-stretch xs:text-base'>
                  show certificate
                  <MdOpenInNew className='text-base xs:text-lg' />
                </div>
              </Link>
            )}
            <div className=' h-full self-stretch justify-between font-vietnam capitalize p-4 outline-[2px] outline-background backdrop-blur-custom shadow-card gap-6 flex flex-col'>
              <div className=' flex justify-between gap-4'>
                <h3 className=' text-sm text-text font-semibold xs:text-base'>
                  {course}
                </h3>
                <MdOutlineOpenInNew className=' text-lg min-w-min text-text-secondary xs:text-xl' />
              </div>

              <div className=' flex flex-col gap-1'>
                <span className=' text-xs text-accent xs:text-sm'>
                  {issuedBy}
                </span>
                <div className=' text-[10px] text-text-secondary justify-between flex gap-1 xs:text-xs'>
                  <span className=' text-nowrap '>{issuedAt}</span>
                  <span>
                    {id.length < 13 ? id : id.substring(0, 12) + '...'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
