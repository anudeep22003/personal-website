import React from "react";
import { ContentSection } from "../ContentSection";

export const EarlyDaysSection: React.FC = () => {
  return (
    <ContentSection id="early-days" title="Early Days">
      <p>
        <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
          pre 2014
        </span>
        Grew up moving around a lot, switching curriculums and
        schools. Read a lot, participated in quizzes. Once, Dad
        bought me a microscope from a work trip to Germany and I
        brought it to school and set up samples, showing all my
        friends what blood, skin, and hair look like at the
        microscopic level. I was confident but undirected. In
        engineering, I studied computer science but yearned to be
        a mechanical engineer. I reluctantly accepted CS. Tried
        running away from tech by doing consulting, but slowly and
        surely I found my own way back to tech.
      </p>
      <p>
        <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
          2014
        </span>
        Fell in love with product management from India, dreamed
        of San Francisco. Took me two years and countless
        rejections to get into Yale—the only school that gave me a
        shot.
      </p>
    </ContentSection>
  );
};