import React from "react";
import { ContentSection } from "../ContentSection";

export const SFJourneySection: React.FC = () => {
  return (
    <ContentSection id="sf-journey" title="San Francisco Journey">
      <p>
        <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
          2017
        </span>
        Moved to SF with no job, slept on couches for 9 months.
        Everyone said "beggars can't be choosers," but I held out
        for what I wanted. Got it. Worked directly with founders
        and realized they're just human. Anyone can build
        something.
      </p>
    </ContentSection>
  );
};