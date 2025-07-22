import React from "react";
import { ContentSection } from "../ContentSection";

export const TurningPointSection: React.FC = () => {
  return (
    <ContentSection id="turning-point" title="The Turning Point">
      <p>
        <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
          2021
        </span>
        Pandemic hit. While deep in biology, GPT-3 dropped—a lightning
        bolt. Saw AI echoing the brain. Quit, left SF, flew to India.
        Reset everything.
      </p>
      <p className="text-center italic text-neutral-600 my-8 text-lg">
        Four years becoming the person I needed to be.
      </p>
    </ContentSection>
  );
};
