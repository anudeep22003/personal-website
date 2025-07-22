import React from "react";
import { ContentSection } from "../ContentSection";

export const BuildingSection: React.FC = () => {
  return (
    <ContentSection id="building" title="Building & Learning">
      <p>
        Taught myself programming, AI, mathematics. Built
        SideBrain (pre-ChatGPT RAG system), Rifflix
        (text-to-animation), and ReqPal (AI recruiting). Learned
        that the universe doesn't care about your cool ideas—only
        whether they solve real problems. Shut down what didn't
        work. Kept what did.
      </p>
      <p>
        Somewhere along the way, found my muse in biology, when I
        realized{" "}
        <span className="underline decoration-green-600 decoration-3 underline-offset-4">
          evolution is the ultimate algorithm
        </span>
        . Evolution creates order despite entropy, three and a
        half billion years of pattern reinforcement. When I get
        stuck on technical problems, I look to biology—it never
        fails me.
      </p>
      <p>
        <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
          now
        </span>
        Building truly autonomous AI agents with event-driven
        architecture and conversational operating systems. No
        frameworks, just first principles. Working on elevating
        the long tail of human talent—those brilliant people whose
        resumes don't have the right stamps but whose potential is
        limitless.
      </p>
    </ContentSection>
  );
};