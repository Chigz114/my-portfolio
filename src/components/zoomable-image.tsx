"use client"

import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { ComponentProps } from "react"

export function ZoomableImage(props: ComponentProps<"img">) {
  return (
    <Zoom>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...props}
        className={`${props.className || ""} rounded-lg border bg-muted`}
        alt={props.alt || "Blog post image"}
      />
    </Zoom>
  )
}
