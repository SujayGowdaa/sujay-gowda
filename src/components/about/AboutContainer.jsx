import Container from "../../ui/Container";
import PageTitle from "../../ui/PageTitle";
import PageTitleSecondary from "../../ui/PageTitleSecondary";

import banner1 from "../../assets/aboutBanner/banner1.webp";
// import banner2 from "../../assets/aboutBanner/banner2.jpg";
import Skills from "../../ui/Skills";
import { skills } from "../../skills";
// import Paragraph from "../../ui/Paragraph";
import FollowMe from "../../ui/FollowMe";
import { motion } from "framer-motion";

const {
  skillOne: { field: skillOneField },
  skillOne: { tools: skillOneTools },
  // skillTwo: { field: skillTwoField },
  skillTwo: { tools: skillTwoTools },
} = skills[0];

export default function AboutContainer() {
  return (
    <Container>
      <PageTitle title={"about"} />
      <motion.div
        className=" lg:relative"
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <div className="h-[200px] shadow-card xs:h-auto">
          <img
            className=" h-full object-cover object-left"
            src={banner1}
            alt="sujay gowda"
          />
        </div>
        <p className=" bg-background p-4 font-vietnam text-sm text-text  shadow-card backdrop-blur-custom xs:p-6 xs:text-base lg:absolute lg:right-6 lg:top-6 lg:max-w-[480px] lg:shadow-card lg:outline lg:outline-[1px] lg:outline-accent xl:right-8 xl:top-8 xl:max-w-[660px] ">
          Frontend Developer with 2+ years of experience building responsive,
          scalable web apps in product-based environments. Skilled in React,
          JavaScript (ES6+), Tailwind CSS, and modern UI patterns. Strong design
          instincts from 4+ years in image editing. Passionate about turning
          mockups into clean, performant code that solves real problems.
        </p>
      </motion.div>
      <motion.div
        className=" flex flex-col gap-2 gap-y-4 xs:gap-4 xs:gap-y-6"
        initial={{
          y: 40,
          opacity: 0,
          transition: {
            staggerChild: 0.3,
          },
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <PageTitleSecondary title={"skills"} />
        <Skills field={skillOneField} tools={skillOneTools} />
        <Skills field={"design & tools"} tools={skillTwoTools} />
      </motion.div>
      <motion.div
        className=" flex flex-col gap-2 xs:gap-3"
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        {/* <PageTitleSecondary title={"hobbies"} />
        <Paragraph className={" text-center xs:text-left"}>
          Beyond my professional pursuits, I value personal growth and
          well-being through a variety of interests and hobbies. These include
          maintaining a healthy lifestyle with fitness activities, developing my
          creative skills in design and editing, and finding relaxation in
          recreational gaming.
        </Paragraph> */}
      </motion.div>
      {/* <motion.div
        className=" overflow-hidden outline outline-[1px] outline-background "
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <img src={banner2} alt="sujay gowda" />
      </motion.div> */}
      <motion.div
        className=" flex flex-col gap-2 xs:gap-4"
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <FollowMe usage={"about"} />
      </motion.div>
    </Container>
  );
}
