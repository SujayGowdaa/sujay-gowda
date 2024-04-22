/* eslint-disable react/prop-types */
import ButtonPop from './ButtonPop';

export default function ProjectChips({ skills, title }) {
  return (
    <div
      className={` flex flex-col  gap-2 2xl:gap-4 xs:text-left xs:justify-start 
      `}
    >
      <h4 className=' capitalize text-sm text-text-secondary md:text-base 2xl:text-lg'>
        {title}
      </h4>
      <div className={` flex gap-2 gap-y-3 flex-wrap 2xl:gap-4 2xl:gap-y-4`}>
        {skills.map((skill) => {
          return (
            <ButtonPop
              key={skill}
              className=' text-nowrap inline-block text-[10px] outline outline-[1px] outline-shadow text-text font-light px-[10px] py-[3px] capitalize md:text-xs 2xl:text-sm 2xl:px-3 2xl:py-1 backdrop-blur-custom'
            >
              {skill}
            </ButtonPop>
          );
        })}
      </div>
    </div>
  );
}
