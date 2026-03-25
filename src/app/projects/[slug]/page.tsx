import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, CalendarIcon } from "lucide-react"
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

      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
      </div>
    </article>
  )
}
