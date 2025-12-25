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
  imageSrc = "/project-placeholder.jpg", // You'll need to add a placeholder image
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full border-2 hover:border-primary/50 transition-colors">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {/* Placeholder for Image - In real use, uncomment Image component */}
        {/* <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        /> */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <span className="text-sm">Project Image Placeholder</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
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
      <CardFooter className="flex gap-2 pt-2 flex-wrap">
        {detailsUrl && (
          <Button variant="secondary" size="sm" className="flex-1 min-w-[120px]" asChild>
            <Link href={detailsUrl}>
              Learn More
            </Link>
          </Button>
        )}
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
  )
}
