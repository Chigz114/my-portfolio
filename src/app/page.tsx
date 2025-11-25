import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Engineering Portfolio <br className="hidden sm:inline" />
          Built with Next.js 14 & Shadcn UI.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Hi, I'm a UIUC EE student passionate about embedded systems and PCB design.
          This is where I showcase my projects and document my learning journey.
        </p>
      </div>
      <div className="flex gap-4">
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
  );
}
