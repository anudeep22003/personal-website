import React, { useEffect, useState } from "react";
import type { TableOfContentsProps } from "@/types";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react"; // or your preferred icon

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  activeSection,
  onSectionClick,
  className = "",
}) => {
  return (
    <>
      {/* Mobile: vertical card-style ToC below header */}
      <nav
        className={`lg:hidden w-full mb-4 bg-white border border-neutral-200 rounded-lg p-4 ${className}`}
        aria-label="Table of contents"
      >
        <h3 className="text-sm font-medium text-neutral-600 mb-4">
          On this page
        </h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionClick(item.id)}
                className={`w-full text-left text-sm px-2 py-1 rounded transition-colors
                  ${
                    activeSection === item.id
                      ? "bg-green-100 text-green-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }
                `}
                aria-current={
                  activeSection === item.id ? "page" : undefined
                }
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop: sidebar */}
      <aside
        className={`hidden lg:block w-64 sticky top-20 h-fit ${className}`}
      >
        <nav className="border-l border-neutral-200 pl-4">
          <h3 className="text-sm font-bold text-neutral-900 mb-4 uppercase">
            On this page
          </h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onSectionClick(item.id)}
                  className={`text-sm text-left hover:text-green-600 transition-colors ${
                    activeSection === item.id
                      ? "text-green-600 font-medium"
                      : "text-neutral-600"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

interface ScrollToTopButtonProps {
  threshold?: number; // px, default: 2.5 * window.innerHeight
  className?: string;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  threshold,
  className = "",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const defaultThreshold = 2.5 * window.innerHeight;
      setVisible(scrollY > (threshold ?? defaultThreshold));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="secondary"
      size="icon"
      className={`fixed bottom-12 right-6 z-50 rounded-full shadow-lg bg-slate-900 text-white ${className}`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </Button>
  );
};
