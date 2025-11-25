import { getPostData, getSortedPostsData } from "@/lib/blog"
import ReactMarkdown from "react-markdown"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { ZoomableImage } from "@/components/zoomable-image"
import { ReadingProgress } from "@/components/reading-progress"
import { CodeBlock } from "@/components/code-block"

interface BlogPostParams {
  params: Promise<{
    category: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: BlogPostParams) {
  const { category, slug } = await params
  const post = getPostData(category, slug)

  return (
    <>
      <ReadingProgress />
      <article className="container max-w-3xl py-8 md:py-10 mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/blog">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <div className="ml-auto">
            <Badge variant="outline" className="uppercase tracking-wide">
              {post.category}
            </Badge>
          </div>
        </div>

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
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <ZoomableImage {...props} />
              ),
              code: ({ node, inline, className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || '')
                return !inline ? (
                  <CodeBlock className={className}>
                    {String(children).replace(/\n$/, '')}
                  </CodeBlock>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  )
}
