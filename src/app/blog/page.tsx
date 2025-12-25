import Link from "next/link"
import { getSortedPostsData } from "@/lib/blog"
import { ArrowRight, Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getCategoryInfo } from "@/lib/blog-categories"

const formatCategoryKey = (category: string) => category.toLowerCase()

export default function BlogPage() {
  const posts = getSortedPostsData()

  const categories = Array.from(
    posts.reduce((map, post) => {
      const list = map.get(post.category) ?? []
      list.push(post)
      map.set(post.category, list)
      return map
    }, new Map<string, typeof posts>())
  )

  return (
    <section className="w-full px-4 md:px-8 py-8 md:py-10 flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
        <div className="space-y-4">
          <h1 className="inline-block font-extrabold tracking-tight text-4xl lg:text-5xl">
            Engineering Knowledge Base
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose a topic to dive into deep-dive tutorials and project writeups.
          </p>
        </div>
      </div>
      <hr className="w-full max-w-4xl my-10" />

      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(([category, list]) => {
          const info = getCategoryInfo(category)
          const encoded = encodeURIComponent(category)

          return (
            <Link
              key={category}
              href={`/blog/${encoded}`}
              className="group relative overflow-hidden rounded-2xl border bg-background transition-all hover:border-primary/60 hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${info.accent} opacity-60 transition group-hover:opacity-80`}
              />
              <div className="relative p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Layers className="h-4 w-4" />
                  <span>{list.length} posts</span>
                </div>
                <h2 className="text-2xl font-semibold">{info.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {info.description}
                </p>
                {info.badge && (
                  <Badge variant="outline" className="rounded-full">
                    {info.badge}
                  </Badge>
                )}
                <div className="flex items-center text-primary font-medium pt-2">
                  View series
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
