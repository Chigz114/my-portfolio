export default function AboutPage() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-extrabold tracking-tight text-4xl lg:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            UIUC EE Student | Embedded Systems | PCB Design
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-4 text-lg text-muted-foreground">
        <p>
          Hello! I am a junior studying Electrical Engineering at the University of Illinois Urbana-Champaign.
        </p>
      </div>
    </section>
  )
}
