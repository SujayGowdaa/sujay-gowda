/* eslint-disable react/prop-types */
export default function PageTitleSecondary({ title, className }) {
  return (
    <h2
      className={` font-semibold text-center font-vietnam uppercase text-lg text-accent ${className}`}
    >
      {title}
    </h2>
  );
}
