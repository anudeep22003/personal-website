import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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
        setError(err instanceof Error ? err.message : "Failed to fetch posts");
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
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 -z-10 rounded-lg opacity-70" />
      <div className="relative border border-neutral-200/60 rounded-lg p-6 bg-white/85 backdrop-blur-sm shadow-sm ring-1 ring-neutral-100/80">
        <header className="mb-8">
          <h1 className="text-2xl font-normal lowercase tracking-tight text-neutral-900 mb-2">
            blog
          </h1>
          <p className="text-base text-neutral-600">
            thoughts on ai, systems, and human potential
          </p>
        </header>

        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="text-center text-neutral-600">
              No blog posts found.
            </div>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-neutral-100 pb-6 last:border-b-0"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block hover:bg-neutral-50/50 rounded-lg p-4 -m-4 transition-colors"
                >
                  <h2 className="text-lg font-medium text-neutral-900 group-hover:text-green-600 transition-colors mb-2">
                    {post.title}
                  </h2>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-neutral-500">
                    <time dateTime={post.publish_date}>
                      {new Date(post.publish_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
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
                  
                  {post.description && (
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {post.description}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-2 mt-3 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>read more</span>
                    <span>→</span>
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogListPage;