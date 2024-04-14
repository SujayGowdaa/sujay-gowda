import Container from '../../ui/Container';
import PageTitle from '../../ui/PageTitle';
import ProjectCard from '../../ui/ProjectCard';

export default function Project() {
  return (
    <Container>
      <PageTitle title={'feature projects'} />
      <ProjectCard />
    </Container>
  );
}
