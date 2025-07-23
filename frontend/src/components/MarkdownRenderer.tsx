/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Custom components for enhanced markdown rendering
const components = {
  // Enhanced code blocks with syntax highlighting
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "";

    if (!inline && language) {
      return (
        <div className="my-6 rounded-lg border border-neutral-200/60 overflow-hidden shadow-sm">
          <div className="bg-neutral-100/50 px-4 py-2 border-b border-neutral-200/40">
            <span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">
              {language}
            </span>
          </div>
          <SyntaxHighlighter
            style={oneDark}
            language={language}
            PreTag="div"
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "#1e1e1e",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      );
    }

    // Inline code
    return (
      <code
        className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    );
  },

  // Enhanced tables
  table({ children }: any) {
    return (
      <div className="my-8 overflow-hidden rounded-lg border border-neutral-200/60 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-neutral-200/60">
            {children}
          </table>
        </div>
      </div>
    );
  },

  thead({ children }: any) {
    return <thead className="bg-neutral-50/80">{children}</thead>;
  },

  th({ children }: any) {
    return (
      <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
        {children}
      </th>
    );
  },

  td({ children }: any) {
    return (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 border-t border-neutral-200/40">
        {children}
      </td>
    );
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tr({ children }: any) {
    return (
      <tr className="hover:bg-neutral-50/50 transition-colors">
        {children}
      </tr>
    );
  },

  // Enhanced headings with better spacing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h1({ children }: any) {
    return (
      <h1 className="text-3xl font-semibold text-neutral-900 mt-12 mb-6 pb-3 border-b border-neutral-200/60 first:mt-0">
        {children}
      </h1>
    );
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h2({ children }: any) {
    return (
      <h2 className="text-2xl font-semibold text-neutral-900 mt-10 mb-4 pb-2 border-b border-neutral-200/40">
        {children}
      </h2>
    );
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h3({ children }: any) {
    return (
      <h3 className="text-xl font-medium text-neutral-900 mt-8 mb-3">
        {children}
      </h3>
    );
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h4({ children }: any) {
    return (
      <h4 className="text-lg font-medium text-neutral-900 mt-6 mb-2">
        {children}
      </h4>
    );
  },

  // Enhanced blockquotes/callouts
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blockquote({ children }: any) {
    return (
      <div className="my-6 border-l-4 border-green-300 bg-green-50/50 p-4 rounded-r-lg">
        <div className="text-neutral-700 italic">{children}</div>
      </div>
    );
  },

  // Enhanced paragraphs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  p({ children }: any) {
    return (
      <p className="text-neutral-700 leading-relaxed mb-4 last:mb-0">
        {children}
      </p>
    );
  },

  // Enhanced lists
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ul({ children }: any) {
    return (
      <ul className="list-disc list-inside space-y-2 my-4 text-neutral-700 ml-4">
        {children}
      </ul>
    );
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ol({ children }: any) {
    return (
      <ol className="list-decimal list-inside space-y-2 my-4 text-neutral-700 ml-4">
        {children}
      </ol>
    );
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  li({ children }: any) {
    return <li className="leading-relaxed">{children}</li>;
  },

  // Enhanced links
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  a({ href, children }: any) {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-green-600 hover:text-green-700 underline underline-offset-2 transition-colors"
      >
        {children}
        {isExternal && (
          <span className="inline-block ml-1 text-xs">↗</span>
        )}
      </a>
    );
  },

  // Enhanced images with captions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img({ src, alt, title }: any) {
    return (
      <figure className="my-8">
        <div className="rounded-lg overflow-hidden border border-neutral-200/60 shadow-sm">
          <img
            src={src}
            alt={alt}
            title={title}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        {(alt || title) && (
          <figcaption className="text-center text-sm text-neutral-600 mt-2 italic">
            {title || alt}
          </figcaption>
        )}
      </figure>
    );
  },

  // Horizontal rule
  hr() {
    return <hr className="my-8 border-neutral-200/60" />;
  },

  // Custom callout support (if using specific syntax)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  div({ className, children, ...props }: any) {
    // Support for callout divs with specific classes
    if (className?.includes("callout")) {
      const type = className.includes("warning")
        ? "warning"
        : className.includes("info")
        ? "info"
        : className.includes("success")
        ? "success"
        : "note";

      const styles = {
        note: "border-blue-300 bg-blue-50/50 text-blue-900",
        info: "border-blue-300 bg-blue-50/50 text-blue-900",
        warning: "border-yellow-300 bg-yellow-50/50 text-yellow-900",
        success: "border-green-300 bg-green-50/50 text-green-900",
      };

      return (
        <div
          className={cn(
            "my-6 border-l-4 p-4 rounded-r-lg",
            styles[type]
          )}
        >
          {children}
        </div>
      );
    }

    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  },
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className,
}) => {
  return (
    <div className={cn("prose-custom", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
