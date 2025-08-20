import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SendMail() {
  return (
    <motion.div
      className=" relative w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className=" absolute top-0 h-[1px] w-full bg-gradient-to-r from-gold-light to-gold-dark md:top-[11px]"></div>
      <Link
        to={"mailto:sujaygowda.dev@gmail.com"}
        className=" absolute left-[50%] translate-x-[-210%] translate-y-[-50%] bg-background px-2 py-1 font-vietnam text-sm capitalize text-text-secondary transition-all duration-300 hover:bg-text hover:text-background active:text-accent xs:translate-x-[-275%] md:translate-x-[-320%] md:translate-y-[-4px] md:text-base"
        target="_blank"
      >
        send mail
      </Link>
    </motion.div>
  );
}
