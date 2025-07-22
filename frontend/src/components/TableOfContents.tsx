import React from "react";
import type { TableOfContentsProps } from "@/types";

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
