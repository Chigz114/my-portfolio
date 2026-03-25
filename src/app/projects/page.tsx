import { ProjectCard } from "@/components/project-card"
import { getSortedProjectsData } from "@/lib/projects"

export default function ProjectsPage() {
  const projects = getSortedProjectsData()

  return (
    <section className="w-full px-4 md:px-8 py-8 md:py-10 flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="space-y-4">
          <h1 className="inline-block font-extrabold tracking-tight text-4xl lg:text-5xl">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            Project-focused portfolio for robotics, autonomy, and embedded systems.
          </p>
        </div>
      </div>
      <hr className="w-full max-w-2xl my-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            detailsUrl={`/projects/${project.slug}`}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </section>
  )
}
