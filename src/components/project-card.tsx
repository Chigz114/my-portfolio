import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  detailsUrl?: string
  imageSrc?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  detailsUrl,
  imageSrc,
}: ProjectCardProps) {
  return (
    <div className="relative h-full">
      {detailsUrl && (
        <Link
          href={detailsUrl}
          aria-label={`View project details for ${title}`}
          className="absolute inset-0 z-10 rounded-lg"
        />
      )}
      <Card className="flex flex-col overflow-hidden h-full border-2 hover:border-primary/50 transition-colors">
        {imageSrc ? (
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        ) : (
          <div className="aspect-video w-full bg-zinc-200 dark:bg-zinc-800" />
        )}
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-3 min-h-[4.5rem]">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="relative z-20 flex gap-2 pt-2 flex-wrap">
          {githubUrl && (
            <Button variant="outline" size="sm" className="flex-1 min-w-[120px]" asChild>
              <Link href={githubUrl} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
          {demoUrl && (
            <Button size="sm" className="flex-1 min-w-[120px]" asChild>
              <Link href={demoUrl} target="_blank" rel="noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
