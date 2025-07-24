import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { BACKEND_URL } from "@/constants";

interface BlogMeta {
  slug: string;
  title: string;
  publish_date: string;
  description?: string;
  tags: string[];
  draft: boolean;
}

interface BlogPost {
  meta: BlogMeta;
  content: string;
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError("No post slug provided");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(
          `${BACKEND_URL}/v1/content/posts/${slug}`
        );
        if (!response.ok) {
          throw new Error("Post not found");
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch post"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <section className="w-full max-w-2xl mx-auto px-4 m-4">
        <div className="text-center text-neutral-600">Loading...</div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="w-full max-w-2xl mx-auto px-4 m-4">
        <div className="text-center text-red-600">
          Error: {error || "Post not found"}
        </div>
        <div className="text-center mt-4">
          <Link
            to="/blog"
            className="text-green-600 hover:text-green-700 underline underline-offset-2"
          >
            ← back to blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-full sm:max-w-4xl mx-auto px-0 sm:px-4 m-4">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 -z-10 rounded-lg opacity-70" />
      <div className="relative border border-neutral-200/60 rounded-lg p-8 bg-white/85 backdrop-blur-sm shadow-sm ring-1 ring-neutral-100/80">
        {/* Back link */}
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-green-600 text-sm transition-colors"
          >
            <span>←</span>
            <span>back to blog</span>
          </Link>
        </div>

        {/* Post header */}
        <header className="mb-10 space-y-6">
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight">
            {post.meta.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <time dateTime={post.meta.publish_date}>
              {new Date(post.meta.publish_date).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </time>

            {post.meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {post.meta.description && (
            <p className="text-neutral-600 text-lg italic border-l-4 border-green-200 pl-6 py-3 bg-green-50/50 rounded-r-lg">
              {post.meta.description}
            </p>
          )}
        </header>

        {/* Post content with enhanced markdown rendering */}
        <article className="max-w-none">
          <MarkdownRenderer
            content={post.content}
            className="space-y-6"
          />
        </article>
      </div>
    </section>
  );
};

export default BlogPostPage;
