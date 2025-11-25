"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export function Comments() {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !ref.current) return

    const theme = resolvedTheme === "dark" ? "dark" : "light"

    // Clear existing giscus
    ref.current.innerHTML = ""

    const script = document.createElement("script")
    script.src = "https://giscus.app/client.js"
    script.setAttribute("data-repo", "Chigz114/my-portfolio")
    script.setAttribute("data-repo-id", "R_kgDOQcVxug")
    script.setAttribute("data-category", "General")
    script.setAttribute("data-category-id", "DIC_kwDOQcVxus4CzCLk")
    script.setAttribute("data-mapping", "pathname")
    script.setAttribute("data-strict", "0")
    script.setAttribute("data-reactions-enabled", "0")
    script.setAttribute("data-emit-metadata", "0")
    script.setAttribute("data-input-position", "top")
    script.setAttribute("data-theme", theme)
    script.setAttribute("data-lang", "en")
    script.crossOrigin = "anonymous"
    script.async = true

    ref.current.appendChild(script)
  }, [mounted, resolvedTheme])

  if (!mounted) {
    return (
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Comments</h2>
        <div className="h-32 animate-pulse rounded bg-muted" />
      </section>
    )
  }

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">Comments</h2>
      <div ref={ref} className="giscus" />
    </section>
  )
}
