import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "ESP32 BLE-MQTT Gateway",
    description: "Low-power IoT gateway with dual-mode operation (Scanner/Broadcaster). Features interrupt-driven channel switching, smart deep sleep scheduling, and BLE data deduplication.",
    tags: ["ESP32", "IoT", "BLE", "MQTT", "NimBLE", "ESP-IDF"],
    githubUrl: "https://github.com",
    demoUrl: "/blog/ESP32",
  },
  {
    title: "STM32 Robotic Arm Controller",
    description: "A 6-DOF robotic arm controller built with STM32F4. Features real-time inverse kinematics solving and CAN bus communication.",
    tags: ["C++", "STM32", "Altium Designer", "Robotics", "FreeRTOS"],
    githubUrl: "https://github.com",
    demoUrl: "https://youtube.com",
  },
  {
    title: "High-Speed Data Acquisition PCB",
    description: "Designed a 4-layer PCB for high-frequency signal acquisition. Integrated 16-bit ADC and FPGA interface with impedance control.",
    tags: ["Altium Designer", "PCB Design", "Signal Integrity", "FPGA"],
    githubUrl: "https://github.com",
  },
  {
    title: "Next.js Engineering Portfolio",
    description: "A modern, high-performance portfolio website built with Next.js 14, Tailwind CSS, and Shadcn UI. Features dark mode and particle effects.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "/",
  },
  {
    title: "IoT Weather Station",
    description: "ESP32-based weather station transmitting data via MQTT to AWS IoT Core. Visualized with a custom React dashboard.",
    tags: ["IoT", "ESP32", "AWS", "React", "MQTT"],
    githubUrl: "https://github.com",
  }
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
