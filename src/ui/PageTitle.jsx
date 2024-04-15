/* eslint-disable react/prop-types */

export default function PageTitle({ title }) {
  return (
    <div className=' relative'>
      <h2 className=' font-extrabold max-w-min mx-auto text-nowrap uppercase text-2xl mb-8 "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gold-light to-gold-dark text-transparent bg-clip-text animate-gradient'>
        {title}
      </h2>
    </div>
  );
}
