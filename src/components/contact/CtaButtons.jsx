import ButtonPop from "../../ui/ButtonPop";
import Links from "../../ui/Links";
import { TbMailUp } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";

export default function CtaButtons() {
  return (
    <>
      <ButtonPop>
        <Links
          className={` group bg-gradient-to-r from-gold-light to-gold-dark text-background shadow-btn-main transition-all duration-100 hover:outline hover:outline-[1px] hover:outline-accent`}
          to="mailto:sujaygowda.dev@gmail.com"
        >
          let&apos;s work together
          <TbMailUp className=" text-xl transition-all duration-100 group-hover:text-text" />
        </Links>
      </ButtonPop>
      <ButtonPop>
        <Links
          className={
            " group min-w-[228px]  text-text transition-all duration-100"
          }
          to={"/resume/sujay_frontend_resume.pdf"}
        >
          download resume
          <MdOutlineFileDownload className="text-xl transition-all group-hover:text-accent" />
        </Links>
      </ButtonPop>
    </>
  );
}
