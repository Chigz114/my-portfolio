export default function BlogPage() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-extrabold tracking-tight text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on engineering, tutorials, and dev logs.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-6">
        <p className="text-muted-foreground">Blog posts will be listed here.</p>
      </div>
    </section>
  )
}
