import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "ESP32 BLE-MQTT Gateway",
    description:
      "Low-power IoT gateway with dual-mode operation (Scanner/Broadcaster). Features interrupt-driven channel switching, smart deep sleep scheduling, and BLE data deduplication.",
    tags: ["ESP32", "IoT", "BLE", "MQTT", "NimBLE", "ESP-IDF"],
    githubUrl: "https://github.com",
    demoUrl: "/blog/ESP32",
  },
]

export default function ProjectsPage() {
  return (
    <section className="w-full px-4 md:px-8 py-8 md:py-10 flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="space-y-4">
          <h1 className="inline-block font-extrabold tracking-tight text-4xl lg:text-5xl">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of hardware and software engineering projects.
          </p>
        </div>
      </div>
      <hr className="w-full max-w-2xl my-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
