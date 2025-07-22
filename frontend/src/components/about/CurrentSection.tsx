import React from "react";
import { ContentSection } from "../ContentSection";

export const CurrentSection: React.FC = () => {
  return (
    <ContentSection 
      id="current" 
      title="Where I Am Right Now"
      className="shadow-md bg-white rounded-lg p-6 mt-12 pt-8 border-t border-neutral-200"
    >
      <p>
        I recently exited a startup where we built AI interviewer
        tools. Now I'm looking around for my next opportunity,
        noodling on some things I want to build, and open to
        opportunities where I get to bring both my product and
        engineering capabilities—the depth in both—to solve hard
        problems. Hard not just technically, but from a product
        and consumer standpoint as well.
      </p>
    </ContentSection>
  );
};