"use client"

import { useEffect, useState } from "react"
import mermaid from "mermaid"

interface MermaidDiagramProps {
  chart: string
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const [renderId] = useState(() => `mermaid-${Math.random().toString(36).slice(2, 9)}`)
  const [svg, setSvg] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "default",
    })

    mermaid
      .render(renderId, chart)
      .then(({ svg }) => {
        if (active) {
          setSvg(svg)
          setError(null)
        }
      })
      .catch((err) => {
        if (active) {
          setError(err?.message ?? "Failed to render Mermaid diagram.")
        }
      })

    return () => {
      active = false
    }
  }, [chart, renderId])

  if (error) {
    return (
      <div className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
        Mermaid Error: {error}
      </div>
    )
  }

  if (!svg) {
    return (
      <div className="rounded-md border border-muted bg-muted/30 p-3 text-sm text-muted-foreground">
        Rendering diagram...
      </div>
    )
  }

  return <div className="w-full overflow-x-auto" dangerouslySetInnerHTML={{ __html: svg }} />
}
