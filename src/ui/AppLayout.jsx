import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAppContext } from '../store/AppContext';
import ParticlesBackground from '../components/particles/ParticlesBackground';

export default function AppLayout() {
  const { theme } = useAppContext();
  const router = useNavigation();

  if (router.state === 'loading') return <div>loading</div>;

  return (
    <div className={`theme-${theme} `}>
      <Navbar />
      <Outlet />
      <ParticlesBackground />
    </div>
  );
}
