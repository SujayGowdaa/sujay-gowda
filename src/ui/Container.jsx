/* eslint-disable react/prop-types */

export default function Container({ children }) {
  return (
    <div className=' flex flex-col flex-wrap justify-center gap-8 py-6 px-4 pb-20'>
      {children}
    </div>
  );
}
