import Container from '../../ui/Container';
import PageTitle from '../../ui/PageTitle';
import PageTitleSecondary from '../../ui/PageTitleSecondary';

import banner1 from '../../assets/aboutBanner/banner1.jpg';
import banner2 from '../../assets/aboutBanner/banner2.jpg';
import Skills from '../../ui/Skills';
import { skills } from '../../skills';
import Paragraph from '../../ui/Paragraph';
import FollowMe from '../../ui/FollowMe';
import { MdOpenInNew } from 'react-icons/md';

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
      <div className=' flex flex-col gap-8'>
        <div className=' relative flex flex-col '>
          <div className=' h-[200px]'>
            <img
              className=' h-full w-auto object-cover object-left'
              src={banner1}
              alt='sujay gowda'
            />
          </div>
          <p className=' text-sm font-vietnam text-text bg-glass backdrop-blur-custom shadow-card p-4'>
            I&apos;m an enthusiastic individual based in Bangalore with a
            passion for coding and continuous learning, specializing in frontend
            development to create intuitive user interfaces and bring designs to
            life. While I typically handle both design and development aspects
            in my personal and freelance projects, my primary focus remains on
            development.
            <br />
            <br />
            Having previously worked as an image editor and designer for several
            years, I have transitioned into web development with newfound
            enthusiasm. I am looking forward to work as a web developer and
            focus on honing my skills in this exciting field and diving into the
            world of creating awesome web applications.
          </p>
        </div>
        <div className=' flex flex-col gap-2'>
          <PageTitleSecondary title={'skills'} />
          <Skills field={skillOneField} tools={skillOneTools} />
          <Skills field={skillTwoField} tools={skillTwoTools} />
        </div>
        <div className=' flex flex-col gap-2'>
          <PageTitleSecondary title={'hobbies'} />
          <Paragraph className={' text-center'}>
            Beyond my professional pursuits, I value personal growth and
            well-being through a variety of interests and hobbies. These include
            maintaining a healthy lifestyle with fitness activities, developing
            my creative skills in design and editing, and finding relaxation in
            recreational gaming.
          </Paragraph>
        </div>
        <div className=' overflow-hidden outline outline-[1px] outline-background '>
          <img src={banner2} alt='sujay gowda' />
        </div>
        <div className=' flex flex-col gap-2'>
          <div className=' flex gap-2 items-center justify-center'>
            <PageTitleSecondary title={'follow me'} />
            <MdOpenInNew className=' text-xl text-accent' />
          </div>
          <FollowMe />
        </div>
      </div>
    </Container>
  );
}
