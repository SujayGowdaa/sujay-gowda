import { FiGithub } from 'react-icons/fi';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { projects } from '../projectData';
import { Link } from 'react-router-dom';

export default function ProjectCard() {
  return (
    <div className=' flex flex-wrap gap-8 justify-center '>
      {projects.map((project) => {
        const { name, image, description, projectLink, githubLink, skills } =
          project;
        return (
          <div
            key={project.name}
            className=' font-vietnam backdrop-blur-custom bg-glass transition-all duration-100 p-6 shadow-card outline outline-[2px] outline-background hover:outline hover:outline-[1px] hover:outline-accent hover:translate-y-[-5px] cursor-pointer max-w-[300px]'
          >
            <div className=' pb-6'>
              <img src={image} alt={name} height={'138px'} width={'252px'} />
            </div>
            <div className=' flex flex-col gap-4'>
              <div className=' flex flex-col gap-2'>
                <div className=' flex justify-between items-center'>
                  <h3 className=' font-sans text-accent text-lg font-bold uppercase'>
                    {name}
                  </h3>
                  <div className=' flex gap-2 text-text-secondary text-xl'>
                    <Link to={projectLink} target='_blank'>
                      <MdOutlineOpenInNew />
                    </Link>
                    <Link to={githubLink} target='_blank'>
                      <FiGithub />
                    </Link>
                  </div>
                </div>
              </div>
              <p className=' text-text text-sm '>{description}</p>
              <div className=' flex flex-col gap-4'>
                <h4 className=' capitalize text-sm font-semibold text-text-secondary'>
                  tech stack
                </h4>
                <div className=' flex gap-2 gap-y-3 flex-wrap'>
                  {skills.map((skill) => {
                    return (
                      <span
                        key={skill}
                        className=' text-nowrap inline-block text-[10px] outline outline-[1px] outline-accent-secondary rounded-full text-accent font-light px-[10px] py-[3px] capitalize'
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
