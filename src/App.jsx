import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div
      className={`  w-screen h-screen bg-background flex flex-col gap-4 justify-center items-center`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
