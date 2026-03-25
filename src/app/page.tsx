import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-white dark:bg-background">
      <section className="w-full px-4 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-[880px] space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-start">
            <div className="h-[300px] w-[250px] max-w-full rounded-md border border-slate-300 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 flex items-center justify-center">
              <span className="text-sm text-[#333] dark:text-slate-200">Photo Placeholder</span>
            </div>

            <div className="space-y-4 text-left">
              <h1 className="text-4xl md:text-[42px] font-bold leading-tight text-[#1f2937] dark:text-foreground">
                池冠漳 / Guanzhang Chi
              </h1>
              <p className="text-base md:text-[17px] text-[#333] dark:text-slate-200">
                Undergraduate | Electrical Engineering
              </p>
              <p className="text-base md:text-[17px] leading-relaxed text-[#333] dark:text-slate-200">
                I am a junior undergraduate student in Electrical Engineering at the Zhejiang University-University of
                Illinois Urbana-Champaign Institute (ZJUI). My research interests focus on autonomous UAV systems,
                path and motion planning, and state estimation under real-world constraints. My recent work explores
                visual localization, dynamics-informed estimation, and integrated control pipelines for robust
                autonomous navigation.
              </p>
              <p className="text-base md:text-[17px] leading-relaxed text-[#333] dark:text-slate-200">
                UIUC GPA: 3.97/4.00 · ZJUI GPA: 3.88/4.00 · Rank: 1/70 · Expected Graduation: Jun 2027
              </p>
              <p className="text-base md:text-[17px] leading-relaxed text-[#333] dark:text-slate-200">
                Email: <a className="underline" href="mailto:guanzhang.23@intl.zju.edu.cn">guanzhang.23@intl.zju.edu.cn</a> / <a className="underline" href="mailto:gc43@illinois.edu">gc43@illinois.edu</a> · GitHub: <a className="underline" href="https://github.com/Chigz114" target="_blank" rel="noreferrer">github.com/Chigz114</a>
              </p>
              <p className="text-base md:text-[17px] leading-relaxed text-[#333] dark:text-slate-200">
                Awards: National Scholarship (2025) · Zhejiang Provincial Government Scholarship (2024)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h2 className="text-2xl font-bold tracking-tight text-[#1f2937] dark:text-foreground">Representative Projects</h2>
              <Button variant="outline" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/projects/crazyflie-uav-gate-passing"
                className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 transition-colors hover:border-slate-500 transform-none"
              >
                <h3 className="font-semibold text-[#1f2937] dark:text-foreground">Crazyflie UAV Gate Passing</h3>
                <p className="mt-2 text-sm md:text-[14px] leading-relaxed text-[#333] dark:text-slate-200">
                  Autonomous gate-passing control for Crazyflie UAV with EKF-fused visual and dynamics-based state estimation; completed simulation and real-flight demo.
                </p>
              </Link>
              <Link
                href="/projects/edc-auto-aiming-tracking-car"
                className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 transition-colors hover:border-slate-500 transform-none"
              >
                <h3 className="font-semibold text-[#1f2937] dark:text-foreground">EDC Tracking Car + Auto-Aiming</h3>
                <p className="mt-2 text-sm md:text-[14px] leading-relaxed text-[#333] dark:text-slate-200">
                  Led end-to-end integration of STM32-based tracking chassis and auto-aiming gimbal, achieving centimeter-level static targeting accuracy.
                </p>
              </Link>
              <Link
                href="/projects/tic-tac-toe-robot-system"
                className="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 transition-colors hover:border-slate-500 transform-none"
              >
                <h3 className="font-semibold text-[#1f2937] dark:text-foreground">Tic-Tac-Toe Robot System</h3>
                <p className="mt-2 text-sm md:text-[14px] leading-relaxed text-[#333] dark:text-slate-200">
                  Vision-guided human-machine game robot combining alpha-beta decision making with 3-axis stepper motion and robust interaction control.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
