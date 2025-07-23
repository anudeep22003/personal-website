import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import DOMPurify from "dompurify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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
    <section className="w-full max-w-2xl mx-auto px-4 m-4">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 -z-10 rounded-lg opacity-70" />
      <div className="relative border border-neutral-200/60 rounded-lg p-6 bg-white/85 backdrop-blur-sm shadow-sm ring-1 ring-neutral-100/80">
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
        <header className="mb-8 space-y-4">
          <h1 className="text-2xl font-medium text-neutral-900 leading-tight">
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
                    className="inline-block bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {post.meta.description && (
            <p className="text-neutral-600 text-base italic border-l-4 border-green-200 pl-4 py-2 bg-green-50/50 rounded-r">
              {post.meta.description}
            </p>
          )}
        </header>

        {/* Post content */}
        <article
          className="prose prose-neutral max-w-none prose-headings:text-neutral-900 prose-headings:font-medium prose-headings:lowercase prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-green-600 prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-green-700 prose-code:text-neutral-800 prose-code:bg-neutral-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-900 prose-pre:text-neutral-100 prose-blockquote:border-l-green-200 prose-blockquote:bg-green-50/30 prose-blockquote:text-neutral-700 prose-table:text-sm"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
        />
      </div>
    </section>
  );
};

export default BlogPostPage;
