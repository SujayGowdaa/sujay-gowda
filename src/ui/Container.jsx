/* eslint-disable react/prop-types */

export default function Container({ children }) {
  return (
    <div className=' flex flex-col flex-wrap justify-center gap-8 py-6 px-4 pb-20 xs:p-8 xs:gap-8 xs:pb-24'>
      {children}
    </div>
  );
}
