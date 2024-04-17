/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function Links({ to, children, className }) {
  return (
    <Link
      className={` ${className}  text-sm capitalize font-vietnam font-medium gap-2 backdrop-blur-custom px-8 text-nowrap py-4 pointer-events-auto outline outline-1  outline-accent flex items-center hover:outline-accent`}
      to={to}
    >
      {children}
    </Link>
  );
}
