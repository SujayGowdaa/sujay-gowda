import logo from '../../assets/logo.svg';

export default function LandingPage() {
  return (
    <div className=' text-center flex justify-center items-center flex-col gap-4'>
      <div className=' w-[100px] '>
        <img className=' w-full' src={logo} alt='SG' />
      </div>
      <div>
        <h1 className=' font-extrabold uppercase text-4xl text-text '>
          sujay gowda
        </h1>
        <h2 className=' font-vietnam capitalize text-base text-text-secondary'>
          frontend developer | image editor
        </h2>
      </div>
    </div>
  );
}
