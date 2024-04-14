import { Outlet, useNavigation } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';

import ParticlesBackground from '../components/particles/ParticlesBackground';
import Navbar from '../components/navbar/Navbar';
import Button from './Button';

export default function AppLayout() {
  const { theme, setIsNavOpen } = useAppContext();
  const router = useNavigation();

  if (router.state === 'loading') return <div>loading</div>;

  return (
    <div className={`theme-${theme}`} onClick={() => setIsNavOpen(false)}>
      <Navbar />
      <Outlet />
      <div className='  fixed justify-center bottom-0 flex gap-4 w-full p-8'>
        <Button type={'circle'} position={'left'} />
        <Button type={'circle'} position={'right'} />
      </div>
      <ParticlesBackground />
    </div>
  );
}
