import { FiGithub } from 'react-icons/fi';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { projects } from '../projectData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import ProjectChips from './ProjectChips';
import ButtonPop from './ButtonPop';

const parent = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
};

export default function ProjectCard() {
  return (
    <motion.div
      className=' grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3  '
      variants={parent}
      initial='hidden'
      animate='show'
    >
      {projects.map((project) => {
        const { name, image, description, projectLink, githubLink, skills } =
          project;
        return (
          <motion.div
            key={project.name}
            className=' flex flex-col font-vietnam  backdrop-blur-custom p-6 shadow-card outline outline-[2px] outline-background hover:outline hover:outline-[1px] cursor-pointer '
            initial={{
              y: 40,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.4,
              },
            }}
            whileHover={{
              outline: '1px solid var(--accent)',
              y: -8,
            }}
          >
            <div className='pb-6'>
              <img className=' ' src={image} alt={name} />
            </div>
            <div className=' flex flex-col gap-4 p-3 md:gap-4'>
              <div className=' flex justify-between items-center gap-4 '>
                <h3 className=' font-sans text-accent text-lg font-bold uppercase md:text-xl'>
                  {name}
                </h3>
                <div className=' flex gap-2 text-text-secondary text-xl md:gap-3 md:text-2xl '>
                  {projectLink && (
                    <ButtonPop className=' hover:text-text transition-colors duration-300'>
                      <Link to={projectLink} target='_blank'>
                        <MdOutlineOpenInNew />
                      </Link>
                    </ButtonPop>
                  )}
                  {githubLink && (
                    <ButtonPop className=' hover:text-text transition-colors duration-300'>
                      <Link
                        to={githubLink}
                        target='_blank'
                        whileHover={{
                          y: -3,
                        }}
                      >
                        <FiGithub />
                      </Link>
                    </ButtonPop>
                  )}
                </div>
              </div>
              <p className=' text-text text-sm md:text-base'>{description}</p>
              <ProjectChips skills={skills} title={'tech stack'} />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
