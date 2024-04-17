import { Outlet, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';

import ParticlesBackground from '../components/particles/ParticlesBackground';
import Navbar from '../components/navbar/Navbar';
import NavigationButtons from '../ui/NavigationButtons';
import { useEffect } from 'react';

export default function AppLayout() {
  const { theme, setIsNavOpen, navigation, isLoading } = useAppContext();

  const navigate = useNavigate();
  useEffect(() => {
    switch (navigation) {
      case 1:
        navigate('/');

        break;
      case 2:
        navigate('/projects');

        break;
      case 3:
        navigate('/experience');

        break;
      case 4:
        navigate('/qualification');

        break;
      case 5:
        navigate('/about');

        break;
      case 6:
        navigate('/contact');

        break;
      default:
        break;
    }
  }, [navigation, navigate]);

  if (isLoading)
    return (
      <div className=' h-screen w-screen bg-background flex justify-center items-center'>
        loading
      </div>
    );

  return (
    <div className={`theme-${theme}`} onClick={() => setIsNavOpen(false)}>
      <Navbar />
      <Outlet />
      <NavigationButtons />
      <ParticlesBackground />
    </div>
  );
}
