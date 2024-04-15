/* eslint-disable react/prop-types */
export default function Paragraph({ children, className }) {
  return (
    <p className={` ${className} text-sm font-vietnam text-text`}>{children}</p>
  );
}
