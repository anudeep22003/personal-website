import React from "react";
import { ContentSection } from "../ContentSection";

export const EarlyDaysSection: React.FC = () => {
  return (
    <ContentSection id="early-days" title="Early Days">
      <p>
        <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
          pre 2014
        </span>
        Moved a lot, read a lot, always curious. Brought a microscope to
        school, showed friends blood and skin up close. Wanted to be a
        mechanical engineer, landed in CS. Tried consulting, but tech
        kept pulling me back.
      </p>
      <p>
        <span className="inline-block bg-neutral-800 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
          2014
        </span>
        Fell for product management in India, set my sights on San
        Francisco. Two years, many mistakes, and a lot of grit later, I
        got into Yale.
      </p>
    </ContentSection>
  );
};
