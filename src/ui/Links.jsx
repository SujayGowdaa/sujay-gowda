/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function Links({ to, children, className }) {
  return (
    <Link
      className={` ${className} text-text text-sm capitalize font-vietnam gap-2 backdrop-blur-custom hover:bg-background group px-8 text-nowrap py-4 pointer-events-auto  outline outline-1 bg-glass outline-background flex items-center hover:text-text shadow-card hover:outline-accent`}
      to={to}
    >
      {children}
    </Link>
  );
}
