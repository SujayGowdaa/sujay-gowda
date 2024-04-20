/* eslint-disable react/prop-types */
export default function TypeLocation({ type, location }) {
  return (
    <div className=' flex gap-1 items-center text-xs xs:text-sm'>
      {/* <span className=' w-[2px] h-auto mr-2 text-text-secondary'>•</span> */}
      <span className='  text-text-secondary capitalize'>{type} |</span>
      <span className=' text-text-secondary capitalize'>{location}</span>
    </div>
  );
}
