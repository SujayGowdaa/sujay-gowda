import Container from '../../ui/Container';
import PageTitle from '../../ui/PageTitle';
import PageTitleSecondary from '../../ui/PageTitleSecondary';

import banner1 from '../../assets/aboutBanner/banner1.jpg';
import banner2 from '../../assets/aboutBanner/banner2.jpg';
import Skills from '../../ui/Skills';
import { skills } from '../../skills';
import Paragraph from '../../ui/Paragraph';
import FollowMe from '../../ui/FollowMe';
import { motion } from 'framer-motion';

const {
  skillOne: { field: skillOneField },
  skillOne: { tools: skillOneTools },
  skillTwo: { field: skillTwoField },
  skillTwo: { tools: skillTwoTools },
} = skills[0];

export default function AboutContainer() {
  return (
    <Container>
      <PageTitle title={'about'} />
      <motion.div
        className=' lg:relative'
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
        <div className='h-[200px] xs:h-auto shadow-card'>
          <img
            className=' object-cover object-left h-full'
            src={banner1}
            alt='sujay gowda'
          />
        </div>
        <p className=' text-sm font-vietnam text-text bg-background backdrop-blur-custom  shadow-card p-4 xs:text-base xs:p-6 lg:outline lg:shadow-card lg:outline-[1px] lg:outline-accent lg:absolute lg:max-w-[480px] lg:top-6 lg:right-6 xl:max-w-[660px] xl:top-8 xl:right-8 '>
          I&apos;m an enthusiastic individual based in Bangalore with a passion
          for coding and continuous learning, specializing in frontend
          development to create intuitive user interfaces and bring designs to
          life. While I typically handle both design and development aspects in
          my personal and freelance projects, my primary focus remains on
          development.
          <br />
          <br />
          Having previously worked as an image editor and designer for several
          years, I have transitioned into web development with newfound
          enthusiasm. I am looking forward to work as a web developer and focus
          on honing my skills in this exciting field and diving into the world
          of creating awesome web applications.
        </p>
      </motion.div>
      <motion.div
        className=' flex flex-col gap-2 gap-y-4 xs:gap-4 xs:gap-y-6'
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
        <PageTitleSecondary title={'skills'} />
        <Skills field={skillOneField} tools={skillOneTools} />
        <Skills field={skillTwoField} tools={skillTwoTools} />
      </motion.div>
      <motion.div
        className=' flex flex-col gap-2 xs:gap-3'
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
        <PageTitleSecondary title={'hobbies'} />
        <Paragraph className={' text-center xs:text-left'}>
          Beyond my professional pursuits, I value personal growth and
          well-being through a variety of interests and hobbies. These include
          maintaining a healthy lifestyle with fitness activities, developing my
          creative skills in design and editing, and finding relaxation in
          recreational gaming.
        </Paragraph>
      </motion.div>
      <motion.div
        className=' overflow-hidden outline outline-[1px] outline-background '
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
        <img src={banner2} alt='sujay gowda' />
      </motion.div>
      <motion.div
        className=' flex flex-col gap-2 xs:gap-4'
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
        <FollowMe usage={'about'} />
      </motion.div>
    </Container>
  );
}
