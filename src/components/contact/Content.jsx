import PageTitleSecondary from '../../ui/PageTitleSecondary';
import Paragraph from '../../ui/Paragraph';

export default function Content() {
  return (
    <>
      <PageTitleSecondary
        className=' text-text capitalize'
        title={'"Open to New Opportunities and Collaborations"'}
      />
      <Paragraph className={' text-text-secondary text-center '}>
        If you have a project idea, a collaboration proposal, or simply want to
        connect and explore potential synergies, feel free to drop me a line
      </Paragraph>
    </>
  );
}
