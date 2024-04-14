/* eslint-disable react/prop-types */
import logo from '../assets/logo.svg';

export default function Logo({ width }) {
  return (
    <div className={` ${width}`}>
      <img className=' w-full' src={logo} alt='SG' />
    </div>
  );
}
