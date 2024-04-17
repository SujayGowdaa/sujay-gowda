import { FiGithub } from 'react-icons/fi';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { projects } from '../projectData';
import { Link } from 'react-router-dom';
import Chips from './Chips';

export default function ProjectCard() {
  return (
    <div className=' grid grid-cols-1 gap-6 sm:grid-cols-2 xs:gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-12 '>
      {projects.map((project) => {
        const { name, image, description, projectLink, githubLink, skills } =
          project;
        return (
          <div
            key={project.name}
            className=' font-vietnam backdrop-blur-custom transition-all duration-100 p-6 shadow-card outline outline-[2px] outline-background hover:outline hover:outline-[1px] hover:outline-accent hover:translate-y-[-5px] cursor-pointer 2xl:p-8'
          >
            <div className=' pb-6 2xl:pb-8'>
              <img src={image} alt={name} />
            </div>
            <div className=' flex flex-col gap-4 2xl:gap-6'>
              <div className=' flex flex-col gap-2 2xl:gap-4'>
                <div className=' flex justify-between items-center gap-4'>
                  <h3 className=' font-sans text-accent text-lg font-bold uppercase md:text-xl 2xl:text-2xl'>
                    {name}
                  </h3>
                  <div className=' flex gap-2 text-text-secondary text-xl md:text-2xl 2xl:gap-4 2xl:text-3xl'>
                    <Link to={projectLink} target='_blank'>
                      <MdOutlineOpenInNew />
                    </Link>
                    <Link to={githubLink} target='_blank'>
                      <FiGithub />
                    </Link>
                  </div>
                </div>
                <p className=' text-text text-sm md:text-base 2xl:text-lg'>
                  {description}
                </p>
              </div>
              <Chips skills={skills} title={'tech stack'} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
