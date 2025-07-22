import React from "react";

export const ContactLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-neutral-200">
      <a
        href="https://www.linkedin.com/in/anudeep-yegireddi/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 underline underline-offset-2 text-sm lowercase transition-colors"
      >
        linkedin
      </a>
      <span className="text-neutral-400">•</span>
      <a
        href="mailto:anudeep@aya.yale.edu"
        className="text-green-600 hover:text-green-700 underline underline-offset-2 text-sm lowercase transition-colors"
      >
        email
      </a>
      <span className="text-neutral-400">•</span>
      <span className="text-neutral-600 text-sm lowercase">
        bay area, ca
      </span>
    </div>
  );
};