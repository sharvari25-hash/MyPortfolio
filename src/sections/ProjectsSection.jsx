import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/portfolio'

function ProjectsSection() {
  return (
    <section id="projects" className="section-anchor py-2">
      <SectionTitle
        eyebrow="Projects"
        title="Three polished builds that showcase frontend finesse, backend depth, and real product thinking."
        description="Each project combines responsive UI, scalable architecture, and interaction design aimed at making an immediate recruiter impact."
        align="center"
      />

      <div className="mt-10 grid gap-5 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
