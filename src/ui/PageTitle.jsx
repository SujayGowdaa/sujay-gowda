/* eslint-disable react/prop-types */

export default function PageTitle({ title }) {
  return (
    <h2 className=' font-extrabold max-w-min mx-auto text-nowrap uppercase text-2xl "absolute top-0 left-0 w-full bg-gradient-to-r from-gold-light to-gold-dark text-transparent bg-clip-text animate-gradient xs:mr-auto xs:ml-0 xs:text-3xl'>
      {title}
    </h2>
  );
}
