import Container from '../../ui/Container';
import PageTitle from '../../ui/PageTitle';
import PageTitleSecondary from '../../ui/PageTitleSecondary';
import Paragraph from '../../ui/Paragraph';
import Links from '../../ui/Links';
import { MdOutlineFileDownload } from 'react-icons/md';
import { TbMailUp } from 'react-icons/tb';
import FollowMe from '../../ui/FollowMe';

export default function ContactContainer() {
  return (
    <div className=' h-screen max-w-[1600px] mx-auto flex flex-col justify-between '>
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
          <Links
            className={` group transition-all shadow-btn-main duration-100 group text-background bg-accent hover:outline hover:outline-[1px] hover:outline-gold-light`}
          >
            let&apos;s work together
            <TbMailUp className=' transition-all duration-75 text-xl group-hover:text-gold-light' />
          </Links>
          <Links
            className={
              ' transition-all  text-text min-w-[228px] duration-100 group'
            }
          >
            download resume
            <MdOutlineFileDownload className='transition-all duration-100 text-xl group-hover:text-accent' />
          </Links>
        </div>
      </Container>
      <div>
        <div className='flex flex-col gap-4 font-vietnam capitalize text-center py-6 px-4 pb-20 xs:p-8 xs:pb-24 sm:p-10 sm:pb-26 lg:p-12 lg:pb-28 xs:text-left md:flex-row md:justify-between'>
          <FollowMe />
          <div className='flex flex-col gap-2 font-vietnam capitalize text-center xs:text-left'>
            <span className=' text-sm text-text-secondary xs:text-base'>
              designed & developed by
            </span>
            <span className=' text-xs font-semibold text-center font-vietnam uppercase xs:text-left bg-clip-text text-transparent bg-gradient-to-r from-gold-light to-gold-dark xs:text-base '>
              sujay gowda
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
