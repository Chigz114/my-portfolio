"use client"

import { useState, useRef, useEffect, ComponentProps } from "react"
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Position {
  x: number
  y: number
}

export function ZoomableImage(props: ComponentProps<"img">) {
  const [isOpen, setIsOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState<Position>({ x: 0, y: 0 })
  
  const containerRef = useRef<HTMLDivElement>(null)

  // Reset state when opening/closing
  useEffect(() => {
    if (!isOpen) {
      setScale(1)
      setPosition({ x: 0, y: 0 })
    } else {
      // Prevent body scroll when open
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleWheel = (e: React.WheelEvent) => {
    if (!isOpen) return;
    // e.stopPropagation() // Event bubbling might be needed for some setups, but usually safe to stop
    // e.preventDefault() // React synthetic events might not support preventing default on wheel for passive listeners
    
    // Simple zoom logic
    const delta = e.deltaY * -0.001
    const newScale = Math.min(Math.max(0.5, scale + delta), 5)
    
    setScale(newScale)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true)
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      e.preventDefault()
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const zoomIn = () => setScale(s => Math.min(s + 0.5, 5))
  const zoomOut = () => setScale(s => Math.max(0.5, s - 0.5))
  const reset = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...props}
        onClick={() => setIsOpen(true)}
        className={cn(
          "cursor-zoom-in rounded-lg border bg-muted transition-colors hover:opacity-90",
          props.className
        )}
        alt={props.alt || "Blog post image"}
      />

      {isOpen && createPortal(
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onWheel={handleWheel}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 z-50 flex gap-2">
            <Button variant="secondary" size="icon" onClick={zoomOut} title="Zoom Out">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" onClick={reset} title="Reset">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" onClick={zoomIn} title="Zoom In">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="destructive" size="icon" onClick={() => setIsOpen(false)} title="Close">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Image Container */}
          <div 
            ref={containerRef}
            className="relative h-full w-full overflow-hidden flex items-center justify-center"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={props.src}
              alt={props.alt}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                cursor: isDragging ? "grabbing" : scale > 1 ? "grab" : "default",
                transition: isDragging ? "none" : "transform 0.1s ease-out",
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain"
              }}
              className="select-none"
              draggable={false}
            />
          </div>
          
          {/* Helper Text */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full pointer-events-none">
            Scroll to zoom • Drag to pan
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
