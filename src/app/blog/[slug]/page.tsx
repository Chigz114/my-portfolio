import { getPostData, getSortedPostsData } from "@/lib/blog"
import ReactMarkdown from "react-markdown"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

interface BlogPostParams {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: BlogPostParams) {
  const { slug } = await params
  const post = getPostData(slug)

  return (
    <article className="container max-w-3xl py-8 md:py-10 mx-auto">
      <Button variant="ghost" asChild className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
        <Link href="/blog">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="space-y-4 mb-8 text-center">
        <h1 className="inline-block font-extrabold tracking-tight text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex justify-center items-center gap-2 text-muted-foreground">
          <time>{post.date}</time>
        </div>
        <div className="flex justify-center gap-2 pt-2">
            {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
                {tag}
            </Badge>
            ))}
        </div>
      </div>

      <hr className="my-8" />

      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}
