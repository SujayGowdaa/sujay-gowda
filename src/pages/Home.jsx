import DownloadResume from '../components/home/DownloadResume';
import LandingPage from '../components/home/LandingPage';
import SendMail from '../components/home/SendMail';

export default function Home() {
  return (
    <div className=' flex flex-col gap-16 justify-center h-screen w-screen'>
      <DownloadResume />
      <LandingPage />
      <SendMail />
    </div>
  );
}
