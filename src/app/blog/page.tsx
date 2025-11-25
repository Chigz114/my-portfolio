import Link from "next/link"
import { getSortedPostsData } from "@/lib/blog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <section className="w-full px-4 md:px-8 py-8 md:py-10 flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="space-y-4">
          <h1 className="inline-block font-extrabold tracking-tight text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on engineering, tutorials, and dev logs.
          </p>
        </div>
      </div>
      <hr className="w-full max-w-2xl my-8" />
      <div className="grid gap-6 w-full max-w-2xl">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`}>
            <Card className="hover:border-primary/50 transition-colors text-left">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs uppercase">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="pt-2">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
