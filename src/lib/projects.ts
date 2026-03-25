import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export type Project = {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  order: number
  githubUrl?: string
  demoUrl?: string
  content: string
}

export function getSortedProjectsData(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)

  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        ...(data as {
          title: string
          date: string
          description: string
          tags: string[]
          order: number
          githubUrl?: string
          demoUrl?: string
        }),
      }
    })

  return allProjectsData.sort((a, b) => a.order - b.order)
}

export function getProjectData(slug: string): Project {
  const fullPath = path.join(projectsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    ...(data as {
      title: string
      date: string
      description: string
      tags: string[]
      order: number
      githubUrl?: string
      demoUrl?: string
    }),
  }
}
