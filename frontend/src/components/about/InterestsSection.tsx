import React from "react";
import { ContentSection } from "../ContentSection";

export const InterestsSection: React.FC = () => {
  return (
    <ContentSection 
      id="interests" 
      title="Areas of Interest"
      className="shadow-md bg-white rounded-lg p-6 mt-12 pt-8 border-t border-neutral-200"
    >
      <p>
        What truly captivates me right now is building
        self-improving agents and novel cognitive architectures.
        I'm particularly interested in memory as a symbolic
        representation of consciousness—where levels of
        association lead to different sparking intensities. I
        believe that in memory is where our self lives.
      </p>
      <p className="mt-4">
        Without a strong memory of the past, we wouldn't have a
        strong sense of identity. Identity is built on our memory.
        So building novel cognitive architectures that incorporate
        the neuroscience of how the brain works—understanding how
        degrees of life as a being begin—is something I'm deeply
        passionate about. This includes building reasoning models,
        self-improving agents, and memory architectures aligned
        with our understanding of the brain.
      </p>
    </ContentSection>
  );
};