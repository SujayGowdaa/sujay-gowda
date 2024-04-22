import { motion } from 'framer-motion';

import Container from '../../ui/Container';
import PageTitle from '../../ui/PageTitle';
import FollowMe from '../../ui/FollowMe';
import Developer from './Developer';
import SlideUp from '../../ui/SlideUp';
import CtaButtons from './CtaButtons';
import Content from './Content';

export default function ContactContainer() {
  return (
    <motion.div
      className=' h-screen max-w-[1600px] mx-auto flex flex-col justify-between '
      initial={{
        y: 40,
        opacity: 0,
        transition: {
          staggerChild: 0.3,
          when: 'beforeChildren',
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
      <Container>
        <PageTitle title={'contact'} />
        <SlideUp className=' flex flex-col gap-2 xs:gap-3'>
          <Content />
        </SlideUp>
        <SlideUp className=' flex gap-6 w-full flex-wrap justify-center xs:justify-start xs:flex-row'>
          <CtaButtons />
        </SlideUp>
      </Container>
      <SlideUp className='flex flex-col gap-4 font-vietnam capitalize text-center py-6 px-4 pb-20 xs:p-8 xs:pb-24 sm:p-10 sm:pb-26 lg:p-12 lg:pb-28 xs:text-left md:flex-row md:justify-between'>
        <FollowMe />
        <Developer />
      </SlideUp>
    </motion.div>
  );
}
