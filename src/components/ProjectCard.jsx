import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'
import { HiMiniArrowUpRight } from 'react-icons/hi2'
import GlassPanel from './GlassPanel'
import Reveal from './Reveal'

const MotionArticle = motion.article

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <MotionArticle whileHover={{ y: -8 }} className="group h-full">
        <GlassPanel className="h-full rounded-[30px] p-4 sm:p-5">
          <div className={`absolute inset-x-4 top-0 h-px bg-gradient-to-r ${project.accent}`} />
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/60">
            <img
              src={project.image}
              alt={`${project.title} project banner`}
              className="h-56 w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="relative mt-5 flex min-h-0 flex-1 flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Featured Project</p>
                <h3 className="font-display mt-2 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <span
                className={`rounded-full bg-gradient-to-r ${project.accent} px-3 py-1 text-xs font-medium text-white shadow-[0_0_18px_rgba(99,102,241,0.26)]`}
              >
                Live Build
              </span>
            </div>

            <p className="mt-4 text-base leading-7 text-slate-300/88">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="outline-button inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white"
              >
                <FaGithub className="text-base" />
                GitHub Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="gradient-button inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white"
              >
                <HiMiniArrowUpRight className="text-base" />
                Live Demo
              </a>
            </div>
          </div>
        </GlassPanel>
      </MotionArticle>
    </Reveal>
  )
}

export default ProjectCard
