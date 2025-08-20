import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import { useAppContext } from "../store/AppContext";
import { useEffect } from "react";

import ParticlesBackground from "../components/particles/ParticlesBackground";
import Navbar from "../components/navbar/Navbar";
import NavigationButtons from "../ui/NavigationButtons";
import LoadingScreen from "./LoadingScreen";

export default function AppLayout() {
  const { theme, setIsNavOpen, navigation } = useAppContext();
  const route = useNavigation();
  const isLoading = route.state === "loading";

  const navigate = useNavigate();
  useEffect(() => {
    switch (navigation) {
      case 1:
        navigate("/");

        break;
      case 2:
        navigate("/projects");

        break;
      case 3:
        navigate("/experience");

        break;
      case 4:
        navigate("/qualification");

        break;
      case 5:
        navigate("/about");

        break;
      case 6:
        navigate("/contact");

        break;
      default:
        break;
    }
    window.scrollTo(0, 0);
  }, [navigation, navigate]);

  return (
    <div className={`theme-${theme}`} onClick={() => setIsNavOpen(false)}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <NavigationButtons />
          <ParticlesBackground />
        </>
      )}
      <div className=" absolute left-0 top-0 z-[-2] h-full w-screen bg-background"></div>
    </div>
  );
}
