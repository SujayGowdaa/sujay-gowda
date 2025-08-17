/* eslint-disable react/prop-types */
import ButtonPop from "./ButtonPop";

export default function ProjectChips({ tags, title }) {
  return (
    <div
      className={` flex flex-col gap-2 xs:justify-start xs:text-left 2xl:gap-4 
      `}
    >
      <h4 className=" text-sm capitalize text-text-secondary md:text-base">
        {title}
      </h4>
      <div className={` flex flex-wrap gap-2 gap-y-3 2xl:gap-4`}>
        {tags.map((tag) => {
          return (
            <ButtonPop
              key={tag}
              className=" inline-block text-nowrap px-[10px] py-[3px] text-[10px] font-light capitalize text-text outline outline-[1px] outline-shadow backdrop-blur-custom  md:text-xs"
            >
              {tag}
            </ButtonPop>
          );
        })}
      </div>
    </div>
  );
}
