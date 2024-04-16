import Container from '../../ui/Container';
import PageTitle from '../../ui/PageTitle';
import PageTitleSecondary from '../../ui/PageTitleSecondary';
import Paragraph from '../../ui/Paragraph';
import Links from '../../ui/Links';
import { MdOutlineFileDownload } from 'react-icons/md';
import { TbMailUp } from 'react-icons/tb';

export default function ContactContainer() {
  return (
    <div className=' h-screen relative'>
      <Container>
        <PageTitle title={'contact'} />
        <div className=' flex flex-col gap-2 xs:gap-4'>
          <PageTitleSecondary
            className=' text-text capitalize'
            title={'"Open to New Opportunities and Collaborations"'}
          />
          <Paragraph className={' text-text-secondary text-center '}>
            If you have a project idea, a collaboration proposal, or simply want
            to connect and explore potential synergies, feel free to drop me a
            line
          </Paragraph>
        </div>
        <div className=' flex gap-6 w-full flex-wrap justify-center xs:justify-start xs:flex-row'>
          <Links className={`transition-all duration-100 group text-accent `}>
            let&apos;s work together
            <TbMailUp className=' transition-all duration-75 group-hover:text-accent text-xl' />
          </Links>
          <Links
            className={' transition-all min-w-[228px]  duration-100 group'}
          >
            download resume
            <MdOutlineFileDownload className='transition-all duration-100 text-xl group-hover:text-accent' />
          </Links>
        </div>
      </Container>
      <div className=' absolute bottom-0 left-[50%] translate-x-[-50%] mb-20 flex flex-col gap-2 items-center justify-end font-vietnam  capitalize xs:left-0 xs:translate-x-0 xs:text-left xs:items-start xs:pl-8'>
        <span className=' text-xs text-text-secondary xs:text-sm'>
          designed & developed by
        </span>
        <span className=' uppercase text-sm bg-clip-text text-transparent font-semibold bg-gradient-to-r from-gold-light to-gold-dark xs:text-base '>
          sujay gowda
        </span>
      </div>
    </div>
  );
}
