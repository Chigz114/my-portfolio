import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, CalendarIcon, Image as ImageIcon, Video } from "lucide-react"
import { getProjectData, getSortedProjectsData } from "@/lib/projects"
import { notFound } from "next/navigation"

interface ProjectDetailParams {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = getSortedProjectsData()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: ProjectDetailParams) {
  const { slug } = await params

  const project = (() => {
    try {
      return getProjectData(slug)
    } catch {
      notFound()
    }
  })()

  return (
    <article className="container max-w-3xl py-8 md:py-10 mx-auto px-4 md:px-0">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
          <Link href="/projects">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <div className="space-y-4 mb-8 text-center">
        <h1 className="inline-block font-extrabold tracking-tight text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <div className="flex justify-center items-center gap-2 text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <time>{project.date}</time>
        </div>
        <p className="text-lg text-muted-foreground">{project.description}</p>
        <div className="flex justify-center gap-2 pt-2 flex-wrap">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <hr className="my-8" />

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-center">Media Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-dashed bg-muted/30 p-6 flex flex-col items-center justify-center gap-3 text-center min-h-40">
            <Video className="h-7 w-7 text-muted-foreground" />
            <p className="font-medium">Demo Video Placeholder</p>
            <p className="text-sm text-muted-foreground">Add project demo video or GIF here.</p>
          </div>
          <div className="rounded-xl border border-dashed bg-muted/30 p-6 flex flex-col items-center justify-center gap-3 text-center min-h-40">
            <ImageIcon className="h-7 w-7 text-muted-foreground" />
            <p className="font-medium">Project Image Placeholder</p>
            <p className="text-sm text-muted-foreground">Add hardware photo, result screenshot, or system diagram here.</p>
          </div>
        </div>
      </section>

      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
      </div>
    </article>
  )
}
