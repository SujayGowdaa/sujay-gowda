import Certificate from '../../ui/Certificate';
import CertificateMain from '../../ui/CertificateMain';
import Container from '../../ui/Container';
import PageTitle from '../../ui/PageTitle';
import PageTitleSecondary from '../../ui/PageTitleSecondary';

export default function QualificationContainer() {
  return (
    <Container>
      <PageTitle title={'qualification'} />
      <CertificateMain />
      <div className=' flex flex-col gap-2'>
        <PageTitleSecondary title={'certificates'} />
        <p className=' text-text text-center font-vietnam text-sm'>
          Over the years, I&apos;ve embarked on a continuous journey of
          self-improvement and skill acquisition through various online courses.
          These courses have been instrumental in expanding my knowledge and
          enhancing my skill set.
        </p>
      </div>
      <Certificate />
    </Container>
  );
}
