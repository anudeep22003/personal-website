import React from "react";
import { ContentSection } from "../ContentSection";

export const PhilosophySection: React.FC = () => {
  return (
    <ContentSection 
      id="philosophy" 
      title="Philosophy"
      className="shadow-md bg-white rounded-lg p-6 mt-12 pt-8 border-t border-neutral-200"
    >
      <p>
        I believe what we call creativity is a resonance of
        patterns already present in nature—from the elegant
        machinery of proteins acting as molecular motors, to their
        roles in signal transmission and threat detection. Our
        innovations are echoes of solutions that biology perfected
        eons ago. But that's the beauty. We're pattern matchers,
        connection makers, bridge builders between what is and
        what could be.
      </p>

      <p className="text-center italic text-neutral-600 my-8 text-lg">
        {/* <span className="underline decoration-green-600 decoration-3 underline-offset-4">
          The distance from idea to creation should be zero
        </span> */}
      </p>

      <p>
        These days you'll find me thinking about reinforcement
        learning, reading molecular biology papers, or building
        systems that help talented people find opportunities.
        Still the same person who learned that love is permanent,
        not passing. Still betting on myself.
      </p>
    </ContentSection>
  );
};