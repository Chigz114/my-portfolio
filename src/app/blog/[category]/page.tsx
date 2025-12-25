import Link from "next/link"
import { getSortedPostsData } from "@/lib/blog"
import { getCategoryInfo } from "@/lib/blog-categories"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ChevronLeft, CalendarIcon, Layers } from "lucide-react"

interface BlogCategoryParams {
  params: Promise<{
    category: string
  }>
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  const unique = Array.from(new Set(posts.map((post) => post.category)))
  return unique.map((category) => ({ category }))
}

export default async function BlogCategoryPage({ params }: BlogCategoryParams) {
  const { category } = await params
  const decodedCategory = decodeURIComponent(category)
  const posts = getSortedPostsData().filter(
    (post) => post.category.toLowerCase() === decodedCategory.toLowerCase()
  )

  const info = getCategoryInfo(decodedCategory)
  const postCount = posts.length

  return (
    <section className="w-full px-4 md:px-8 py-8 md:py-10 flex flex-col gap-8">
      <div className="w-full max-w-4xl mx-auto space-y-6 text-center">
        <Button variant="ghost" asChild className="mx-auto w-fit gap-2">
          <Link href="/blog">
            <ChevronLeft className="h-4 w-4" /> Back to Categories
          </Link>
        </Button>
        <div className="space-y-4">
          <div className="flex justify-center gap-3 text-sm text-muted-foreground">
            <Layers className="h-4 w-4" />
            <span>{postCount} posts</span>
          </div>
          <h1 className="inline-block font-extrabold tracking-tight text-4xl lg:text-5xl">
            {info.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {info.description}
          </p>
          {info.badge && (
            <Badge variant="outline" className="rounded-full px-3 py-1">
              {info.badge}
            </Badge>
          )}
        </div>
        {decodedCategory.toLowerCase() === "stm32" && (
          <div className="rounded-lg border bg-muted/50 p-4 text-sm text-muted-foreground text-left">
            This series originates from tutorials I wrote for the ZJUI Electronic Design Club (Chinese).
            Source site:
            <a
              href="https://elec.marslab.xyz"
              className="text-primary hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              elec.marslab.xyz
            </a>
          </div>
        )}
      </div>

      <div className="grid w-full max-w-5xl mx-auto grid-cols-1 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${encodeURIComponent(post.category)}/${post.slug}`}
            className="block group"
          >
            <SpotlightCard
              className="h-full"
              spotlightColor="rgba(255, 255, 255, 0.08)"
            >
              <div className="flex flex-col gap-4 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <Badge variant="outline" className="uppercase tracking-wide">
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground">{post.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Link>
        ))}

        {posts.length === 0 && (
          <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
            No posts yet. Stay tuned.
          </div>
        )}
      </div>
    </section>
  )
}
