/* eslint-disable react/prop-types */

export default function Container({ children }) {
  return (
    <div className=' flex flex-col flex-wrap justify-center max-w-[1600px] mx-auto gap-8 py-6 px-4 pb-20 xs:p-8 xs:gap-8 xs:pb-24 sm:p-10 sm:gap-10 sm:pb-26 '>
      {children}
    </div>
  );
}
