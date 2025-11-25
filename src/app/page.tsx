import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ParticlesBackground } from "@/components/particles-background";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />
      
      <section className="z-10 w-full px-4 md:px-8 flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-20 text-center">
        <div className="flex max-w-[980px] flex-col items-center gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Arch <br className="hidden sm:inline" />
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Hi, I'm a UIUC EE student.
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
