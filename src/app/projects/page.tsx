import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "ESP32 BLE-MQTT Gateway",
    description:
      "Low-power IoT gateway with dual-mode operation (Scanner/Broadcaster). Features interrupt-driven channel switching, smart deep sleep scheduling, and BLE data deduplication.",
    tags: ["ESP32", "IoT", "BLE", "MQTT", "NimBLE", "ESP-IDF"],
    githubUrl: "https://github.com",
    demoUrl: "/blog/ESP32",
    detailsUrl: "/blog/ESP32/0.project-overview",
  },
  {
    title: "FPGA tinyGPU",
    description:
      "A custom tinyGPU pipeline implemented on FPGA, documenting the architecture, rendering path, and display pipeline optimizations.",
    tags: ["FPGA", "Verilog", "Graphics", "tinyGPU"],
    githubUrl: "https://github.com",
    demoUrl: "/blog/FPGA",
    detailsUrl: "/blog/FPGA/1.big-picture",
  },
  {
    title: "STM32 Self-Balancing Robot",
    description:
      "Two-wheeled self-balancing robot using STM32F103C8T6, covering IMU fusion, motor control, and PID stabilization tutorials.",
    tags: ["STM32", "Embedded", "Robotics", "PID"],
    githubUrl: "https://github.com",
    demoUrl: "/blog/STM32",
    detailsUrl: "/blog/STM32/0.project-overview",
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
