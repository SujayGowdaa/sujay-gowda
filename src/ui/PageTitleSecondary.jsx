/* eslint-disable react/prop-types */
export default function PageTitleSecondary({ title, className }) {
  return (
    <h2
      className={` ${className} font-semibold text-center font-vietnam uppercase text-lg text-accent xs:text-left xs:text-xl`}
    >
      {title}
    </h2>
  );
}
