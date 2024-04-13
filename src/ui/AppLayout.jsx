import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAppContext } from '../store/AppContext';

export default function AppLayout() {
  const { theme } = useAppContext();
  return (
    <div className={`theme-${theme}`}>
      <div className=' bg-background text-text'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
