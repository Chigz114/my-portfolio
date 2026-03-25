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
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
              Junior in Electrical Engineering at ZJU-UIUC Institute (ZJUI), focusing on autonomous UAV systems,
              motion planning, and state estimation for real-world robotic autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border bg-background/80 p-4 text-center">
              <p className="text-sm text-muted-foreground">UIUC GPA</p>
              <p className="text-2xl font-bold">3.97 / 4.00</p>
            </div>
            <div className="rounded-xl border bg-background/80 p-4 text-center">
              <p className="text-sm text-muted-foreground">ZJUI GPA</p>
              <p className="text-2xl font-bold">3.88 / 4.00</p>
            </div>
            <div className="rounded-xl border bg-background/80 p-4 text-center">
              <p className="text-sm text-muted-foreground">Major Rank</p>
              <p className="text-2xl font-bold">1 / 70</p>
            </div>
            <div className="rounded-xl border bg-background/80 p-4 text-center">
              <p className="text-sm text-muted-foreground">Expected Graduation</p>
              <p className="text-2xl font-bold">Jun 2027</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-background/80 p-6 space-y-4">
              <h2 className="text-xl font-semibold">Research Interests</h2>
              <p className="text-muted-foreground leading-relaxed">
                Autonomous UAV systems, path and motion planning, multi-sensor fusion, state estimation, and practical
                deployment of autonomous navigation systems.
              </p>
            </div>
            <div className="rounded-xl border bg-background/80 p-6 space-y-4">
              <h2 className="text-xl font-semibold">Contact & Awards</h2>
              <div className="text-muted-foreground space-y-2">
                <p>Email: guanzhang.23@intl.zju.edu.cn / gc43@illinois.edu</p>
                <p>GitHub: github.com/Chigz114</p>
                <p>Location: Haining, Zhejiang, China</p>
                <p>Awards: National Scholarship (2025), Zhejiang Provincial Government Scholarship (2024)</p>
              </div>
            </div>
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
                <p className="mt-2 text-sm text-muted-foreground">Trajectory planning, visual localization, EKF fusion, and safe autonomous control.</p>
              </Link>
              <Link href="/projects/edc-auto-aiming-tracking-car" className="rounded-xl border bg-background/80 p-5 hover:border-primary/60 transition-colors">
                <h3 className="font-semibold">EDC Tracking Car + Auto-Aiming</h3>
                <p className="mt-2 text-sm text-muted-foreground">STM32 system integration, visual targeting pipeline, and closed-loop tracking.</p>
              </Link>
              <Link href="/projects/tic-tac-toe-robot-system" className="rounded-xl border bg-background/80 p-5 hover:border-primary/60 transition-colors">
                <h3 className="font-semibold">Tic-Tac-Toe Robot System</h3>
                <p className="mt-2 text-sm text-muted-foreground">Vision-guided game robot with alpha-beta decision and 3-axis motion control.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
