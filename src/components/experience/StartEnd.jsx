/* eslint-disable react/prop-types */
export default function StartEnd({ start, end }) {
  return (
    <span className=' flex gap-1  text-xs xs:text-sm'>
      <span className='  text-text-secondary capitalize'>{start}</span>
      <span className=' text-text-secondary '>-</span>
      <span className='  text-text-secondary capitalize'>{end}</span>
    </span>
  );
}
