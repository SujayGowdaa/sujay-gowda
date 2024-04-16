/* eslint-disable react/prop-types */

export default function Skills({ field, tools }) {
  return (
    <div className=' justify-center font-vietnam flex flex-col gap-1  '>
      <span className=' text-nowrap text-sm text-text justify-center flex gap-1 capitalize font-medium'>
        {field}
      </span>
      <div className=' flex flex-wrap justify-center gap-1'>
        {tools.map((tool, i) => {
          return (
            <span
              className=' capitalize justify-center text-xs text-nowrap text-text-secondary'
              key={tool}
            >
              {tool}
              {tools.length === i + 1 ? '.' : ','}
            </span>
          );
        })}
      </div>
    </div>
  );
}
