import { useEffect, useState } from 'react';
import { work } from '../workExperience';
import { IoIosArrowDown } from 'react-icons/io';

export default function Accordion() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=' flex flex-col font-vietnam shadow-card bg-glass backdrop-blur-custom'>
      {work.map((xp, i) => {
        const { role, company, start, end, responsibilities, type, location } =
          xp;

        return (
          <div
            className={` flex flex-col text-nowrap select-none cursor-pointer ${
              isAccordionOpen === i && ' border-y-[1px] border-accent'
            }`}
            key={company}
            onClick={() => setIsAccordionOpen(isAccordionOpen === i ? null : i)}
          >
            <div
              className={` group flex justify-between items-center py-4 px-4 xs:py-5 xs:px-6 md:py-6 ${
                isAccordionOpen === i
                  ? 'border-b-[1px] border-shadow shadow-xp'
                  : 'border-y-[1px] border-shadow'
              }`}
            >
              <div className=' group flex items-center'>
                <div className=' flex flex-col gap-2 '>
                  <h2
                    className={` font-vietnam font-medium capitalize text-sm group-hover:text-accent xs:text-base  ${
                      isAccordionOpen === i ? ' text-accent' : 'text-text '
                    }`}
                  >
                    {role}
                  </h2>
                  <h3 className=' capitalize text-text-secondary text-xs xs:text-base '>
                    {company}
                  </h3>
                </div>
              </div>
              <div className=' flex items-center gap-4 text-xs xs:text-sm md:gap-6 '>
                {viewportWidth > 425 && viewportWidth < 700 && (
                  <>
                    <span className=' flex gap-1'>
                      <span className='  text-text-secondary capitalize'>
                        {start}
                      </span>
                      <span className=' text-text-secondary '>-</span>
                      <span className='  text-text-secondary capitalize'>
                        {end}
                      </span>
                    </span>
                  </>
                )}
                {viewportWidth > 700 && (
                  <>
                    <span className=' flex gap-1'>
                      <span className='  text-text-secondary capitalize'>
                        {start}
                      </span>
                      <span className=' text-text-secondary '>-</span>
                      <span className='  text-text-secondary capitalize'>
                        {end}
                      </span>
                    </span>
                    <div className=' flex gap-1'>
                      <span className='  text-text-secondary capitalize'>
                        {type} |
                      </span>
                      <span className='  text-text-secondary capitalize'>
                        {location}
                      </span>
                    </div>
                  </>
                )}
                <span
                  className={`${
                    isAccordionOpen === i ? ' rotate-180' : 'rotate-0'
                  }`}
                >
                  <IoIosArrowDown
                    className={` group-hover:text-accent xs:text-xl ${
                      isAccordionOpen === i ? 'text-accent' : 'text-text'
                    }`}
                  />
                </span>
              </div>
            </div>

            <div className=' flex flex-col gap-2 bg-glass backdrop-blur-custom'>
              {isAccordionOpen === i && (
                <div className=' flex flex-col gap-2 p-4 xs:p-6 xs:gap-3 md:gap-4 md:p-8'>
                  {viewportWidth < 425 && (
                    <div className=' flex gap-4 items-center text-xs flex-wrap'>
                      <span className=' flex gap-1'>
                        <span className=' w-[2px] h-auto mr-2 text-text-secondary'>
                          •
                        </span>
                        <span className='  text-text-secondary capitalize'>
                          {start}
                        </span>
                        <span className=' text-text-secondary '>-</span>
                        <span className='  text-text-secondary capitalize'>
                          {end}
                        </span>
                      </span>
                      <div className=' capitalize flex gap-1'>
                        <span className='  text-text-secondary capitalize'>
                          {type} |
                        </span>
                        <span className='  text-text-secondary capitalize'>
                          {location}
                        </span>
                      </div>
                    </div>
                  )}
                  {viewportWidth > 425 && viewportWidth < 700 && (
                    <div className=' flex gap-1 items-center text-xs xs:text-sm'>
                      <span className=' w-[2px] h-auto mr-2 text-text-secondary'>
                        •
                      </span>
                      <span className='  text-text-secondary capitalize'>
                        {type} |
                      </span>
                      <span className=' text-text-secondary capitalize'>
                        {location}
                      </span>
                    </div>
                  )}
                  {responsibilities.map((li, index) => {
                    return (
                      <li
                        className=' list-none text-wrap text-xs text-text leading-5 space-x-2 xs:text-base'
                        key={index}
                      >
                        <span className=' w-[2px] h-auto'>›</span>
                        <span>{li}.</span>
                      </li>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
