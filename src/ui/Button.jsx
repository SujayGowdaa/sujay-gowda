/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import { useAppContext } from "../store/AppContext";
import { motion } from "framer-motion";

export default function Button({
  type,
  onClick,
  position,
  className,
  disable,
}) {
  const { isNavOpen } = useAppContext();

  if (type === "circle")
    return (
      <motion.button
        className={` ${className} bghover:bg-text group pointer-events-auto flex items-center justify-center rounded-full bg-background p-3 text-lg shadow-btn outline outline-1 outline-shadow hover:bg-text 2xl:p-3.5

        ${
          position && "  active:shadow-btn-active "
        } ${disable && " cursor-not-allowed hover:shadow-none"}`}
        initial={{
          rotate: !position && 180,
          x: !position && -50,
        }}
        animate={
          !position &&
          (!isNavOpen
            ? {
                x: [0, 12, 0],
                transition: {
                  duration: 1, // make it slower (2 seconds per cycle)
                  repeat: Infinity, // loop forever
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              }
            : {
                rotate: isNavOpen ? 0 : 180,
                x: 0,
                transition: { duration: 0.3 },
              })
        }
        whileHover={{
          x:
            (position === "left" && [2, -4]) ||
            (position === "right" && [-2, 4]),
          transition: {
            repeat: Infinity,
            duration: 2,
            ease: "easeOut",
          },
        }}
        disabled={disable}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      >
        <IoIosArrowForward
          className={` fill-text transition-all duration-300 group-hover:fill-background group-active:fill-accent  ${
            position === "left" && " rotate-180"
          }
               ${isNavOpen && !position && " fill-accent "}
             ${position === "right" && " rotate-0"} ${
               position && " text-text-secondary "
             }`}
        />
      </motion.button>
    );
}
