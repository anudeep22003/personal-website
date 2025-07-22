import React from "react";
import type { TableOfContentsProps } from "@/types";

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  activeSection,
  onSectionClick,
  className = ""
}) => {
  return (
    <aside className={`hidden lg:block w-64 sticky top-8 h-fit ${className}`}>
      <nav className="border-l border-neutral-200 pl-4">
        <h3 className="text-sm font-medium text-neutral-600 mb-4">
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
  );
};