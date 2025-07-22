import React from "react";
import { ScrollToTopButton, TableOfContents } from "@/components/TableOfContents";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import type { TocItem } from "@/types";
import {
  IntroSection,
  EarlyDaysSection,
  YaleSection,
  SFJourneySection,
  TurningPointSection,
  BuildingSection,
  PhilosophySection,
  InterestsSection,
  CurrentSection,
  ContactLinks,
} from "@/components/about";

const About: React.FC = () => {
  const { activeSection, scrollToSection } = useScrollSpy();

  const tocItems: TocItem[] = [
    { id: "intro", label: "Introduction" },
    { id: "early-days", label: "Early Days" },
    { id: "yale", label: "Yale & Transformation" },
    { id: "sf-journey", label: "San Francisco Journey" },
    { id: "turning-point", label: "The Turning Point" },
    { id: "building", label: "Building & Learning" },
    { id: "philosophy", label: "Philosophy" },
    { id: "interests", label: "Areas of Interest" },
    { id: "current", label: "Where I Am Now" },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 flex flex-col gap-8 lg:flex-row">
      {/* Table of Contents: mobile (top) and desktop (sidebar) */}
      <div className="mt-8 lg:mt-20">
        <TableOfContents
          items={tocItems}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
      </div>

      <article className="flex-1 max-w-2xl mx-auto pb-20">
        <IntroSection />

        <div className="text-base leading-relaxed text-neutral-800 space-y-6">
          <EarlyDaysSection />
          <YaleSection />
          <SFJourneySection />
          <TurningPointSection />
          <BuildingSection />
          <PhilosophySection />
          <InterestsSection />
          <CurrentSection />
          <ContactLinks />
        </div>
      </article>
      <ScrollToTopButton />
    </div>
  );
};

export default About;
