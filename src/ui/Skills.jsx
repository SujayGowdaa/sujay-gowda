/* eslint-disable react/prop-types */

import Chips from './Chips';

export default function Skills({ field, tools }) {
  return (
    <div className=' justify-center font-vietnam flex flex-col gap-1  '>
      <Chips skills={tools} title={field} center={true} />
    </div>
  );
}
