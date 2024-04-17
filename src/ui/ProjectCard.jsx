import { FiGithub } from 'react-icons/fi';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { projects } from '../projectData';
import { Link } from 'react-router-dom';

export default function ProjectCard() {
  return (
    <div className=' grid grid-cols-1 gap-6 xs:grid-cols-2 xs:gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-12 '>
      {projects.map((project) => {
        const { name, image, description, projectLink, githubLink, skills } =
          project;
        return (
          <div
            key={project.name}
            className=' font-vietnam backdrop-blur-custom bg-glass transition-all duration-100 p-6 shadow-card outline outline-[2px] outline-background hover:outline hover:outline-[1px] hover:outline-accent hover:translate-y-[-5px] cursor-pointer 2xl:p-8'
          >
            <div className=' pb-6 2xl:pb-8'>
              <img src={image} alt={name} />
            </div>
            <div className=' flex flex-col gap-4 2xl:gap-6'>
              <div className=' flex flex-col'>
                <div className=' flex justify-between items-center'>
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
              </div>
              <p className=' text-text text-sm md:text-base 2xl:text-lg'>
                {description}
              </p>
              <div className=' flex flex-col gap-4 2xl:gap-6'>
                <h4 className=' capitalize text-sm font-semibold text-text-secondary md:text-base 2xl:text-lg'>
                  tech stack
                </h4>
                <div className=' flex gap-2 gap-y-3 flex-wrap 2xl:gap-4 2xl:gap-y-4'>
                  {skills.map((skill) => {
                    return (
                      <span
                        key={skill}
                        className=' text-nowrap inline-block text-[10px] outline outline-[1px] outline-accent-secondary rounded-full text-accent font-light px-[10px] py-[3px] capitalize md:text-xs 2xl:text-sm 2xl:px-3 2xl:py-1'
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
