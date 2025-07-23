"""Content service for blog posts."""
from datetime import datetime
from pathlib import Path

import frontmatter  # type: ignore
import markdown
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/content")
CONTENT_DIR = Path("content")


class BlogMeta(BaseModel, extra="allow"):
    """Blog post metadata model with flexible extra fields."""

    slug: str
    title: str
    publish_date: datetime
    description: str | None = None
    tags: list[str] = []
    draft: bool = False


class BlogPost(BaseModel):
    """Complete blog post with metadata and content."""

    meta: BlogMeta
    content: str


def load_post(slug: str) -> BlogPost:
    """Load a blog post by slug."""
    filepath = CONTENT_DIR / f"{slug}.md"
    if not filepath.exists():
        raise HTTPException(status_code=404, detail="Post not found")

    post = frontmatter.load(filepath)
    meta = BlogMeta(slug=slug, **post.metadata)

    # Convert markdown to HTML
    html = markdown.markdown(
        post.content,
        extensions=["fenced_code", "codehilite", "tables", "toc", "attr_list"],
    )

    return BlogPost(meta=meta, content=html)


@router.get("/posts", response_model=list[BlogMeta])
async def list_posts() -> list[BlogMeta]:
    """List all published blog posts."""
    posts = []

    for filepath in CONTENT_DIR.glob("*.md"):
        try:
            post = frontmatter.load(filepath)
            # Skip draft posts
            if not post.metadata.get("draft", False):
                meta = BlogMeta(slug=filepath.stem, **post.metadata)
                posts.append(meta)
        except Exception:
            # Skip invalid posts
            continue

    # Sort by publish date, newest first
    return sorted(posts, key=lambda p: p.publish_date, reverse=True)


@router.get("/posts/{slug}", response_model=BlogPost)
async def get_post(slug: str) -> BlogPost:
    """Get a specific blog post by slug."""
    return load_post(slug)
