import Certificate from '../../ui/Certificate';
import CertificateMain from '../../ui/CertificateMain';
import Container from '../../ui/Container';
import PageTitle from '../../ui/PageTitle';
import PageTitleSecondary from '../../ui/PageTitleSecondary';
import { motion } from 'framer-motion';

const opacityDownUp = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function QualificationContainer() {
  return (
    <Container>
      <PageTitle title={'qualification'} />
      <CertificateMain />
      <motion.div
        className=' flex flex-col gap-2 xs:gap-3'
        variants={opacityDownUp}
        initial='hidden'
        animate='show'
      >
        <PageTitleSecondary title={'certificates'} />
        <p className=' text-text text-center font-vietnam text-sm xs:text-left xs:text-base'>
          Over the years, I&apos;ve embarked on a continuous journey of
          self-improvement and skill acquisition through various online courses.
          These courses have been instrumental in expanding my knowledge and
          enhancing my skill set.
        </p>
      </motion.div>
      <Certificate />
    </Container>
  );
}
