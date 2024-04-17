/* eslint-disable react/prop-types */

export default function Container({ children, className }) {
  return (
    <div
      className={` flex flex-col w-full flex-wrap max-w-[1600px] mx-auto gap-8 py-6 px-4 pb-20 xs:p-8 xs:gap-8 xs:pb-24 sm:p-10 sm:gap-10 sm:pb-26 lg:p-12 lg:pb-28 ${className}`}
    >
      {children}
    </div>
  );
}
