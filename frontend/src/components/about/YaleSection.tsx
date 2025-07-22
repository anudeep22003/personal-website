import React from "react";
import { ContentSection } from "../ContentSection";

export const YaleSection: React.FC = () => {
  return (
    <ContentSection id="yale" title="Yale & Transformation">
      <p>
        At Yale, everything changed. Found a philosophy class that{" "}
        <span className="underline decoration-green-600 decoration-3 underline-offset-4">
          rewired how I think.{" "}
        </span>
        Spent 9 months forcing my brain to connect every new idea
        to something I already knew, decomposing thoughts until I
        hit first principles. Uncomfortable as hell, but it
        worked. Eventually all knowledge felt
        interconnected—biology, physics, AI, spirituality,
        everything resonating across the same trunk of truth.
      </p>
      <p>
        I also interned at Apple, and started a company one after
        the other. Worked on high-profile projects such as App
        Store Redesign and Single Sign-On, but still, the fun I
        had at the startup had my heart. Came back, knew that I
        wanted to work as a PM at an early-stage startup. It was
        not an easy decision.
      </p>
    </ContentSection>
  );
};