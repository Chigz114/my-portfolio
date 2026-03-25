import Link from "next/link";
import { getSortedProjectsData } from "@/lib/projects";

export default function Home() {
  const projects = getSortedProjectsData();

  return (
    <div className="w-full bg-background text-foreground">
      <section className="w-full px-4 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-[880px] space-y-10">
          <div className="space-y-4 text-left">
            <h1 className="text-4xl md:text-[42px] font-bold leading-tight text-foreground">
              池冠漳 / Guanzhang Chi
            </h1>
            <p className="text-base md:text-[17px] text-muted-foreground">
              Undergraduate | Electrical Engineering
            </p>
            <p className="text-base md:text-[17px] leading-relaxed text-muted-foreground">
              I am a junior undergraduate student in Electrical Engineering at the Zhejiang University-University of
              Illinois Urbana-Champaign Institute (ZJUI). My research interests focus on autonomous UAV systems,
              path and motion planning, and state estimation under real-world constraints. My recent work explores
              visual localization, dynamics-informed estimation, and integrated control pipelines for robust
              autonomous navigation.
            </p>
            <p className="text-base md:text-[17px] leading-relaxed text-muted-foreground">
              UIUC GPA: 3.97/4.00 · ZJUI GPA: 3.88/4.00 · Rank: 1/70 · Expected Graduation: Jun 2027
            </p>
            <p className="text-base md:text-[17px] leading-relaxed text-muted-foreground">
              Email: <a className="underline" href="mailto:guanzhang.23@intl.zju.edu.cn">guanzhang.23@intl.zju.edu.cn</a> / <a className="underline" href="mailto:gc43@illinois.edu">gc43@illinois.edu</a> · GitHub: <a className="underline" href="https://github.com/Chigz114" target="_blank" rel="noreferrer">github.com/Chigz114</a>
            </p>
            <p className="text-base md:text-[17px] leading-relaxed text-muted-foreground">
              Awards: National Scholarship (2025) · Zhejiang Provincial Government Scholarship (2024)
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Projects</h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="block border-l-4 border-foreground pl-4 py-3 pr-2 bg-muted/60 transition-colors hover:bg-muted"
                >
                  <h3 className="text-[22px] md:text-[24px] font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{project.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
