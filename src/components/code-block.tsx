"use client"

import { useState } from "react"
import { Highlight, themes } from "prism-react-renderer"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  children: string
  className?: string
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false)
  
  // Parse language and filename from className (e.g. "language-c:main.c")
  const fullLanguage = className?.replace("language-", "") || "text"
  const [language, filename] = fullLanguage.split(":")

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="relative my-6 overflow-hidden rounded-xl border bg-[#1e1e1e] dark:border-zinc-800">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-[#1e1e1e] px-4 py-2 text-zinc-400">
        <div className="flex items-center gap-2">
          {filename ? (
            <span className="text-xs font-medium text-zinc-100">{filename}</span>
          ) : (
            <span className="text-xs font-medium uppercase">{language}</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
          onClick={copyToClipboard}
        >
          {isCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>

      {/* Code */}
      <Highlight
        theme={themes.vsDark}
        code={children.trim()}
        language={language as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="overflow-x-auto py-2">
            <pre className={cn(className, "float-left min-w-full px-4 font-mono text-sm")} style={{ ...style, backgroundColor: "transparent" }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="mr-4 inline-block w-4 select-none text-right text-xs text-zinc-600">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    </div>
  )
}
