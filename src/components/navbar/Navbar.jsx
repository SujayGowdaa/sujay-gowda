import { useAppContext } from "../../store/AppContext";
import Button from "../../ui/Button";
import NavLinkContainer from "./NavLinkContainer";

export default function Navbar() {
  const { isNavOpen, setIsNavOpen } = useAppContext();

  return (
    <>
      <div
        className={` fixed top-0 z-10 flex max-w-min items-start gap-6 transition-all duration-500 md:gap-10 2xl:gap-12 ${
          isNavOpen
            ? "right-0"
            : "pointer-events-none right-[-240px] xl:right-[-265px]"
        } `}
        onClick={() => setIsNavOpen(false)}
      >
        <div
          className={`  mt-6 xs:mt-8 sm:mt-10 md:mt-12 ${
            isNavOpen && " rounded-full bg-background shadow-custom-sm "
          }`}
        >
          <Button type="circle" onClick={() => setIsNavOpen(!isNavOpen)} />
        </div>
        <NavLinkContainer />
      </div>
      {isNavOpen && (
        <div className=" backdrop-contrast-25 fixed left-0 top-0 z-[9] h-screen w-screen overflow-hidden backdrop-blur-[3px] backdrop-grayscale"></div>
      )}
    </>
  );
}
