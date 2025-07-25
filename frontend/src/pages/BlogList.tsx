import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { BACKEND_URL } from "@/constants";

interface BlogMeta {
  slug: string;
  title: string;
  publish_date: string;
  description?: string;
  tags: string[];
  draft: boolean;
}

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/v1/content/posts`);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch posts"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="w-full max-w-2xl mx-auto px-4 m-4">
        <div className="text-center text-neutral-600">Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full max-w-2xl mx-auto px-4 m-4">
        <div className="text-center text-red-600">Error: {error}</div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-2xl mx-auto px-4 m-4">
      <header className="mb-6">
        <h1 className="text-2xl font-normal lowercase tracking-tight text-neutral-900 mb-1">
          blog
        </h1>
        <p className="text-sm text-neutral-600">
          thoughts on ai, systems, and human potential
        </p>
      </header>

      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="text-center text-neutral-600 text-sm">
            No blog posts found.
          </div>
        ) : (
          posts.map((post) => (
            <article
              key={post.slug}
              className="group hover:bg-neutral-50/30 rounded-lg p-3 transition-colors border border-transparent hover:border-neutral-200"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-base font-medium text-neutral-900 group-hover:text-green-600 transition-colors flex-1">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.publish_date}
                    className="text-xs text-neutral-400 whitespace-nowrap flex-shrink-0"
                  >
                    {new Date(post.publish_date).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </time>
                </div>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-neutral-400">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {post.description && (
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {post.description}
                  </p>
                )}
              </Link>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default BlogListPage;
