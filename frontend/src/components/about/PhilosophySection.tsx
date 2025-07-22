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
        Creativity is just remixing nature’s patterns. Proteins, motors,
        signals—biology solved it first. We’re just catching up,
        connecting dots, building bridges.
      </p>
      <p className="text-center italic text-neutral-600 my-8 text-lg">
        {/* <span className="underline decoration-green-600 decoration-3 underline-offset-4">
          The distance from idea to creation should be zero
        </span> */}
      </p>
      <p>
        These days: reading molecular biology, building systems for
        hidden talent, and betting on myself.
      </p>
    </ContentSection>
  );
};
