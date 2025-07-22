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
        Just exited a startup building AI interviewers. Now exploring,
        tinkering, and open to roles where I can blend product and
        engineering to solve real, hard problems.
      </p>
    </ContentSection>
  );
};
