import React from "react";
import { ContentSection } from "../ContentSection";

export const TurningPointSection: React.FC = () => {
  return (
    <ContentSection id="turning-point" title="The Turning Point">
      <p>
        <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
          2021
        </span>
        The turning point. Pandemic hit, was deep in educating
        myself on biology when GPT-3 launched, and I saw
        transformer architecture mirroring Wernicke's and Broca's
        areas in the brain.{" "}
        <span className="underline decoration-green-600 decoration-3 underline-offset-4">
          Lightning strike of clarity
        </span>
        . I exited the company, abandoned all immediate plans to
        stay in SF, and flew back to India.
      </p>
      <p className="text-center italic text-neutral-600 my-8 text-lg">
        Spent the next four years becoming the person I needed to
        be
      </p>
    </ContentSection>
  );
};