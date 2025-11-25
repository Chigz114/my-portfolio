---
title: "Why I Switched from CRA to Next.js 14"
date: "2024-05-20"
description: "Exploring the benefits of Server-Side Rendering and the App Router for engineering portfolios."
tags: ["Next.js", "React", "Web Dev"]
---

## The Problem with Client-Side Rendering

I started my web development journey with Create React App (CRA). While it was great for learning, I quickly hit performance bottlenecks.

*   **SEO**: Search engines struggled to index my content.
*   **Load Time**: Users had to download a massive JS bundle before seeing anything.

## Enter Next.js

Next.js solves these problems with **Server Components**.

```tsx
// This runs on the server!
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}
```

### Key Benefits

1.  **Zero Bundle Size**: Server components don't add to the JS bundle.
2.  **Great SEO**: Content is rendered to HTML on the server.
3.  **Image Optimization**: The `<Image />` component is a lifesaver.

## Final Thoughts

For any engineer looking to build a portfolio, I highly recommend Next.js. It enforces good practices and the developer experience is top-notch.
