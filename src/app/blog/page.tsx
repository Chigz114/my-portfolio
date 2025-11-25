import Link from "next/link"
import { getSortedPostsData } from "@/lib/blog"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function BlogPage() {
  const posts = getSortedPostsData()
  
  // Extract unique categories
  const categories = Array.from(new Set(posts.map(post => post.category)))
  
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
      
      <Tabs defaultValue="all" className="w-full max-w-2xl">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Posts</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </TabsContent>

        {categories.map(category => (
          <TabsContent key={category} value={category} className="space-y-6">
            {category.toLowerCase() === "stm32" && (
              <div className="rounded-lg border bg-muted/50 p-4 text-sm text-muted-foreground">
                <p>
                  The self-balancing robot tutorials in this section are adapted from my Chinese articles 
                  originally written for the <strong>Electronic Design Club</strong> at ZJUI 
                  (Zhejiang University - University of Illinois Urbana-Champaign Joint Institute).{" "}
                  Visit the club website:{" "}
                  <a href="https://elec.marslab.xyz" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    elec.marslab.xyz
                  </a>
                </p>
              </div>
            )}
            {posts
              .filter(post => post.category === category)
              .map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

function BlogCard({ post }: { post: any }) {
  return (
    <Link href={`/blog/${post.category}/${post.slug}`} className="block group">
      <SpotlightCard className="h-full" spotlightColor="rgba(255, 255, 255, 0.1)">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs uppercase">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
            </div>
          </div>
          <CardDescription className="pt-2">{post.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </SpotlightCard>
    </Link>
  )
}
