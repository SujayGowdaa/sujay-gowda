import { useAppContext } from "../store/AppContext";
import Button from "./Button";
import { motion } from "framer-motion";

export default function NavigationButtons() {
  const { navigation, setNavigation } = useAppContext();

  return (
    <div className="pointer-events-none fixed bottom-4 z-[5] flex w-full justify-center gap-6 p-4 xs:p-8 2xl:gap-8">
      {/* Left button with tooltip */}
      <motion.span
        initial={{ opacity: 1, x: -50 }}
        animate={{ opacity: 1, x: [0, -6, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="group pointer-events-auto relative"
      >
        <div className="group relative inline-block">
          <Button
            type="circle"
            position="left"
            disable={navigation === 1}
            onClick={() => {
              if (navigation === 1) return;
              setNavigation(navigation - 1);
            }}
          />
          <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-background px-2 py-1 text-xs font-light text-text opacity-0 transition-opacity group-hover:opacity-100">
            Previous Page
          </span>
        </div>
      </motion.span>

      {/* Right button with tooltip */}
      <motion.span
        initial={{ opacity: 1, x: 50 }}
        animate={{ opacity: 1, x: [0, 6, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="group pointer-events-auto relative"
      >
        <div className="group relative inline-block">
          <Button
            type="circle"
            position="right"
            onClick={() => {
              if (navigation === 6) {
                localStorage.setItem("currentPage", "1");
                setNavigation(1);
              } else {
                setNavigation(navigation + 1);
              }
            }}
          />
          <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-background px-2 py-1 text-xs font-light text-text opacity-0 transition-opacity group-hover:opacity-100">
            Next Page
          </span>
        </div>
      </motion.span>
    </div>
  );
}
