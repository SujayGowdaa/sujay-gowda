/* eslint-disable react/prop-types */

export default function Container({ children, className }) {
  return (
    <div className="  hide-scrollbar mx-auto h-dvh w-full max-w-[1600px] overflow-auto">
      <div
        className={`flex flex-col flex-wrap gap-8 overflow-auto px-4 py-6 pb-20 xs:gap-8 xs:p-8 xs:pb-24 sm:gap-10 sm:p-10 sm:pb-26 lg:p-12 lg:pb-28 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
