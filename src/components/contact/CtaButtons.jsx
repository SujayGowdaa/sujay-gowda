import ButtonPop from '../../ui/ButtonPop';
import Links from '../../ui/Links';
import { TbMailUp } from 'react-icons/tb';
import { MdOutlineFileDownload } from 'react-icons/md';

export default function CtaButtons() {
  return (
    <>
      <ButtonPop>
        <Links
          className={` group bg-gradient-to-r from-gold-light to-gold-dark transition-all duration-100 shadow-btn-main text-background hover:outline hover:outline-[1px] hover:outline-accent`}
          to='mailto:sujaygowda.dev@gmail.com'
        >
          let&apos;s work together
          <TbMailUp className=' transition-all duration-100 text-xl group-hover:text-text' />
        </Links>
      </ButtonPop>
      <ButtonPop>
        <Links
          className={
            ' transition-all duration-100  text-text min-w-[228px] group'
          }
          to={'/resume/sujaygowda.pdf'}
        >
          download resume
          <MdOutlineFileDownload className='transition-all text-xl group-hover:text-accent' />
        </Links>
      </ButtonPop>
    </>
  );
}
