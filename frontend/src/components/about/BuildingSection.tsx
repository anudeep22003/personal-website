import React from "react";
import { ContentSection } from "../ContentSection";

export const BuildingSection: React.FC = () => {
  return (
    <ContentSection id="building" title="Building & Learning">
      <p>
        Taught myself programming, AI, math. Built SideBrain
        (pre-ChatGPT RAG), Rifflix (text-to-animation), ReqPal (AI
        recruiting). Learned the universe only cares if you solve real
        problems. Shut down what didn’t work, doubled down on what did.
      </p>
      <p>
        Found my muse in biology—evolution is the ultimate algorithm.
        When stuck, I look to nature. It never fails.
      </p>
      <p>
        <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
          now
        </span>
        Building autonomous AI agents, event-driven systems, and tools
        for overlooked talent. No frameworks, just first principles.
      </p>
    </ContentSection>
  );
};
