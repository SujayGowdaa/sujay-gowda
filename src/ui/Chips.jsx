/* eslint-disable react/prop-types */
export default function Chips({ skills, title, center }) {
  return (
    <div
      className={` flex flex-col gap-2 2xl:gap-4 ${
        center && 'justify-center text-center xs:text-left xs:justify-start'
      }`}
    >
      <h4 className=' capitalize text-sm text-text-secondary md:text-base 2xl:text-lg'>
        {title}
      </h4>
      <div
        className={` flex gap-2 gap-y-3 flex-wrap 2xl:gap-4 2xl:gap-y-4 ${
          center && 'justify-center xs:justify-start'
        }`}
      >
        {skills.map((skill) => {
          return (
            <span
              key={skill}
              className=' text-nowrap inline-block text-[10px] outline outline-[1px] outline-shadow text-text font-light px-[10px] py-[3px] capitalize md:text-xs 2xl:text-sm 2xl:px-3 2xl:py-1'
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}
