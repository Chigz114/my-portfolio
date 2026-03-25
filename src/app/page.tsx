import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ParticlesBackground } from "@/components/particles-background";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <ParticlesBackground />

      <section className="relative z-10 w-full px-4 md:px-8 py-10 md:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Home</p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              池冠漳 / Guanzhang Chi
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Zhejiang University-University of Illinois Urbana-Champaign Institute (ZJUI) · Electrical Engineering · Junior
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              guanzhang.23@intl.zju.edu.cn · gc43@illinois.edu · github.com/Chigz114
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              UIUC GPA: 3.97/4.00 · ZJUI GPA: 3.88/4.00 · Rank: 1/70 · Expected Graduation: Jun 2027
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-3 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Research Interests</h2>
            <p className="text-muted-foreground leading-relaxed md:text-lg">
              I focus on autonomous UAV systems, path and motion planning, and state estimation under real-world constraints.
              My recent work explores visual localization, dynamics-informed estimation, and integrated control pipelines
              for robust autonomous navigation.
            </p>
            <p className="text-sm text-muted-foreground">
              Awards: National Scholarship (2025) · Zhejiang Provincial Government Scholarship (2024)
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h2 className="text-2xl font-bold tracking-tight">Representative Projects</h2>
              <Button variant="outline" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/projects/crazyflie-uav-gate-passing" className="rounded-xl border bg-background/80 p-5 hover:border-primary/60 transition-colors">
                <h3 className="font-semibold">Crazyflie UAV Gate Passing</h3>
                <p className="mt-2 text-sm text-muted-foreground">Autonomous gate-passing control for Crazyflie UAV with EKF-fused visual and dynamics-based state estimation; completed simulation and real-flight demo.</p>
              </Link>
              <Link href="/projects/edc-auto-aiming-tracking-car" className="rounded-xl border bg-background/80 p-5 hover:border-primary/60 transition-colors">
                <h3 className="font-semibold">EDC Tracking Car + Auto-Aiming</h3>
                <p className="mt-2 text-sm text-muted-foreground">Led end-to-end integration of STM32-based tracking chassis and auto-aiming gimbal, achieving centimeter-level static targeting accuracy.</p>
              </Link>
              <Link href="/projects/tic-tac-toe-robot-system" className="rounded-xl border bg-background/80 p-5 hover:border-primary/60 transition-colors">
                <h3 className="font-semibold">Tic-Tac-Toe Robot System</h3>
                <p className="mt-2 text-sm text-muted-foreground">Vision-guided human-machine game robot combining alpha-beta decision making with 3-axis stepper motion and robust interaction control.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
