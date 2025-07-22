import React from "react";
import type { ContentSectionProps } from "@/types";

export const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  children,
  className = "shadow-md bg-white rounded-lg p-6"
}) => {
  return (
    <section id={id} className={className}>
      <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
        {title}
      </h2>
      {children}
    </section>
  );
};