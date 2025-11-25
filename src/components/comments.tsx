"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function Comments() {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!ref.current) return

    // Clear existing giscus iframe
    const existingScript = ref.current.querySelector("script.giscus")
    if (existingScript) {
      existingScript.remove()
    }
    const existingWidget = ref.current.querySelector(".giscus")
    if (existingWidget) {
      existingWidget.remove()
    }

    const script = document.createElement("script")
    script.src = "https://giscus.app/client.js"
    script.setAttribute("data-repo", "Chigz114/my-portfolio")
    script.setAttribute("data-repo-id", "R_kgDOQcVxug")
    script.setAttribute("data-category", "General")
    script.setAttribute("data-category-id", "DIC_kwDOQcVxus4CzCLk")
    script.setAttribute("data-mapping", "pathname")
    script.setAttribute("data-strict", "0")
    script.setAttribute("data-reactions-enabled", "1")
    script.setAttribute("data-emit-metadata", "0")
    script.setAttribute("data-input-position", "top")
    script.setAttribute("data-theme", resolvedTheme === "dark" ? "dark" : "light")
    script.setAttribute("data-lang", "zh-CN")
    script.setAttribute("data-loading", "lazy")
    script.crossOrigin = "anonymous"
    script.async = true
    script.className = "giscus"

    ref.current.appendChild(script)
  }, [resolvedTheme])

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">评论</h2>
      <div ref={ref} />
    </section>
  )
}
