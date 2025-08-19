import { useAppContext } from "../../store/AppContext";
import Button from "../../ui/Button";
import NavLinkContainer from "./NavLinkContainer";
import { motion } from "framer-motion";

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
        {/* Toggle Nav Button with Tooltip (Right side) */}
        <motion.div
          initial={{ opacity: 1, x: -50 }}
          animate={{ opacity: 1, x: [0, -6, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="group relative mt-6 xs:mt-8 sm:mt-10 md:mt-12"
        >
          <Button type="circle" onClick={() => setIsNavOpen(!isNavOpen)} />
          {/* Tooltip on LEFT side */}
          <span className="absolute right-[50px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-background px-2 py-1 text-xs font-light text-text opacity-0 transition group-hover:opacity-100">
            {isNavOpen ? "Close Menu" : "Open Menu"}
          </span>
        </motion.div>

        {/* Your Nav Links (can add tooltips inside NavLinkContainer if needed) */}
        <NavLinkContainer />
      </div>

      {isNavOpen && (
        <div className="backdrop-contrast-25 fixed left-0 top-0 z-[9] h-screen w-screen overflow-hidden backdrop-blur-[3px] backdrop-grayscale"></div>
      )}
    </>
  );
}
