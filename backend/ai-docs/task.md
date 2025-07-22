Below is a “minimum-viable” pattern I’ve used for projects that look exactly like yours (FastAPI + React/TS, deployed as a static Cloudflare Pages site). It keeps the authoring experience as simple as dropping a .md/.mdx file into /content, yet is flexible enough to grow into a full CMS UI later.

⸻

1 Authoring format — Markdown + front-matter

Why front-matter rather than a fenced JSON blob?

Approach	Pros	Cons
YAML/TOML/JSON front-matter---title: ...publish_date: 2024-03-15tags: [ai, auth]description: ...---	De-facto standard (Jekyll, Hugo, Astro, etc.) so every parser & CMS already understands it; supports multiline strings; easy to diff in Git; no code-block noise	Needs a front-matter delimiter (---)
JSON inside a fenced code block	Visually obvious that it’s data; valid JSON	Not recognized by markdown tooling; harder to lint/validate; you must strip the fence before parsing

Using YAML front-matter means you can parse with python-frontmatter on the backend  or gray-matter / remark-frontmatter on the JS side; every Git-based CMS (Decap, Tina, Stackbit) also expects it.

Example file (/content/posts/auth-agents.md):

---
title: "How to Implement Auth in Agents"
publish_date: 2024-03-15
description: "Secure auth patterns for LLM-powered agents."
tags:
  - ai
  - auth
  - agents
cover_image: ./images/auth-flow.png
draft: false
seo:
  canonical: https://example.com/blog/auth-agents
  og_image: https://example.com/og/auth-agents.png
---

# Implementing Authentication in AI Agents

![Authentication Flow Diagram](./images/auth-flow.png)

...

Front-matter is completely open-ended, so you can tack on any new field (series, readingTime, heroColor, etc.) later without schema migrations.

⸻

2 Backend — 30-line FastAPI “content service”

# app/content.py
from pathlib import Path
from datetime import datetime
import frontmatter, markdown
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()
POST_DIR = Path("content/posts")

class Meta(BaseModel, extra="allow"):      # extra="allow" = flexible
    slug: str
    title: str
    publish_date: datetime
    description: str | None = None
    tags: list[str] = []
    draft: bool = False

def load(slug: str):
    fp = POST_DIR / f"{slug}.md"
    if not fp.exists():
        raise HTTPException(404, "Not found")
    post = frontmatter.load(fp)
    meta = Meta(slug=slug, **post.metadata)
    html = markdown.markdown(
        post.content,
        extensions=["fenced_code", "codehilite", "tables", "toc", "attr_list"],
    )
    return meta, html

@router.get("/posts", response_model=list[Meta])
async def list_posts():
    metas = [Meta(slug=f.stem, **frontmatter.load(f).metadata)
             for f in POST_DIR.glob("*.md") if not frontmatter.load(f).metadata.get("draft")]
    return sorted(metas, key=lambda m: m.publish_date, reverse=True)

@router.get("/posts/{slug}")
async def get_post(slug: str):
    meta, html = load(slug)
    return {"meta": meta, "content": html}

Why server-side?
	•	Zero client bundle bloat (no remark/syntax-highlighter libs in the browser).
	•	SEO-friendly rendered HTML immediately.
	•	One source of truth (FastAPI can also generate an RSS feed, sitemap, search index).

⸻

3 Frontend React component

import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";

export default function BlogPost({ slug }: { slug: string }) {
  const { data } = useQuery(["post", slug], () =>
    fetch(`/api/posts/${slug}`).then(r => r.json())
  );
  if (!data) return null;

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{data.meta.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(data.meta.publish_date).toLocaleDateString()}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}
      />
    </article>
  );
}

	•	Images work out-of-the-box when you commit them under /public/images/... and reference them with relative paths.
	•	Code highlighting comes from the codehilite Markdown extension (server-side Pygments).
	•	A few KB of sanitized HTML is streamed to the browser; no heavyweight MD renderer needed.

⸻

4 Optional “real” CMS UI

Because everything is just Markdown in Git, you can bolt on a Git-based UI later without rewriting anything:

CMS	One-liner to add	Good fit for Cloudflare Pages?	Notes
Decap CMS (ex-Netlify)	Add /admin/index.html + config.yml	✅	Pure SPA; works with any static host; easiest for non-tech authors
TinaCMS	npx create-tina-app	✅	Visual side-by-side editing; GraphQL API; deploys as part of your React bundle

Both tools leave the Markdown files untouched; they simply commit edits to the repo. If you stay solo, you may never need them—but it’s nice to know you can sprinkle a UI on top in an afternoon.

⸻

5 Why this is “simple but complete”
	•	Single source of truth: a plain .md file; Git handles versioning & review.
	•	Flexible metadata: front-matter parsed into a Pydantic model that happily accepts new keys.
	•	No database migrations: add a field → commit → deploy.
	•	Best-of-breed Markdown rendering: code fences (```python), tables, images, footnotes, etc., all via standard Markdown extensions.
	•	SEO-ready: publish date, description, canonical URL, OpenGraph fields live beside the content.
	•	Grows with you: slide in Decap/Tina for a GUI, swap Markdown for MDX if you ever need React components inside posts, or move the rendering entirely to build-time if you want a 100 % static site.

⸻

TL;DR

Stick a YAML front-matter block on top of each Markdown file, parse it with python-frontmatter in a tiny FastAPI service, and render the resulting HTML in your React blog component. It’s hard to find anything simpler that still gives you full-fidelity Markdown, flexible metadata, solid SEO, and a painless upgrade path to a GUI CMS later.