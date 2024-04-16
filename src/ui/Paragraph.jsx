/* eslint-disable react/prop-types */
export default function Paragraph({ children, className }) {
  return (
    <p
      className={` ${className} text-sm font-vietnam text-text xs:text-base xs:text-left`}
    >
      {children}
    </p>
  );
}
