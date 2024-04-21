import { Outlet, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { useEffect } from 'react';

import ParticlesBackground from '../components/particles/ParticlesBackground';
import Navbar from '../components/navbar/Navbar';
import NavigationButtons from '../ui/NavigationButtons';

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
    window.scrollTo({ top: 0 });
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
      <div className=' bg-background h-screen w-screen absolute top-0 left-0 z-[-2]'></div>
    </div>
  );
}
