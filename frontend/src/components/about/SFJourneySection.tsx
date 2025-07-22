import React from "react";
import { ContentSection } from "../ContentSection";

export const SFJourneySection: React.FC = () => {
  return (
    <ContentSection id="sf-journey" title="San Francisco Journey">
      <p>
        <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
          2017
        </span>
        Landed in SF with no job, crashed on couches for 9 months.
        Ignored the "beggars can't be choosers" advice, held out for the
        right role. Got it. Learned founders are just people. Anyone can
        build something.
      </p>
    </ContentSection>
  );
};
