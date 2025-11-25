export default function AboutPage() {
  return (
    <section className="w-full px-4 md:px-8 py-8 md:py-10 flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="space-y-4">
          <h1 className="inline-block font-extrabold tracking-tight text-4xl lg:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            UIUC EE Student | Embedded Systems | PCB Design
          </p>
        </div>
      </div>
      <hr className="w-full max-w-2xl my-8" />
      <div className="flex flex-col gap-4 text-lg text-muted-foreground max-w-2xl text-center">
        <p>
          Hello! I am a junior studying Electrical Engineering at the University of Illinois Urbana-Champaign.
        </p>
      </div>
    </section>
  )
}
