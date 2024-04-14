import { Outlet, useNavigation } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';

import ParticlesBackground from '../components/particles/ParticlesBackground';
import Navbar from '../components/navbar/Navbar';
import NavigationButtons from '../ui/NavigationButtons';

export default function AppLayout() {
  const { theme, setIsNavOpen } = useAppContext();
  const router = useNavigation();

  if (router.state === 'loading') return <div>loading</div>;

  return (
    <div className={`theme-${theme}`} onClick={() => setIsNavOpen(false)}>
      <Navbar />
      <Outlet />
      <NavigationButtons />
      <ParticlesBackground />
    </div>
  );
}
