import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <section className="w-full px-4 md:px-8 flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-20 text-center">
        <div className="flex max-w-[980px] flex-col items-center gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Engineering Portfolio <br className="hidden sm:inline" />
          Built with Next.js 14 & Shadcn UI.
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Hi, I'm a UIUC EE student passionate about embedded systems and PCB design.
          This is where I showcase my projects and document my learning journey.
        </p>
      </div>
      <div className="flex gap-4 justify-center">
        <Button asChild>
          <Link href="/projects">
            View Projects
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/about">
            About Me
          </Link>
        </Button>
      </div>
    </section>
    </div>
  );
}
