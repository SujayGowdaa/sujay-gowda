import Logo from '../../ui/Logo';
import Title from './Title';

export default function LandingPage() {
  return (
    <div className=' text-center flex justify-center items-center flex-col gap-4'>
      <Logo width={'w-[100px]'} />
      <Title />
    </div>
  );
}
