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
        className={` ${className} group pointer-events-auto flex items-center justify-center rounded-full p-2 outline outline-1 outline-shadow hover:bg-background hover:shadow-btn 2xl:p-3 ${
          !position && " bg-glass shadow-btn"
        } 

        ${
          position && " backdrop-blur-custom active:shadow-btn-active "
        } ${disable && " cursor-not-allowed hover:shadow-none"}`}
        initial={{
          rotate: !position && 180,
          x: !position && -50,
        }}
        animate={
          !position && {
            rotate: isNavOpen ? 0 : 180,
            x: 0,
            transition: {
              duration: 0.3,
            },
          }
        }
        whileHover={{
          x:
            (position === "left" && [2, -4]) ||
            (position === "right" && [-2, 4]),
          transition: {
            repeat: Infinity,
            delay: 0.1,
            repeatType: "mirror",
            duration: 0.3,
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
          className={` fill-text transition-all duration-300 group-hover:fill-accent  ${
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
