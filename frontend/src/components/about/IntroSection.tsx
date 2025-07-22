import React from "react";

export const IntroSection: React.FC = () => {
  return (
    <section
      id="intro"
      className="flex flex-col gap-6 text-black mt-12 mb-16"
    >
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-normal lowercase tracking-tight">
          hi, i'm anudeep
        </h1>
        <p className="text-lg text-neutral-600 lowercase italic">
          engineer, founder, late bloomer
        </p>
      </header>
      <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
        Introduction
      </h2>
      <div className="flex flex-col gap-1 text-sm">
        <div className="flex items-center rounded-full px-3 py-1">
          <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-medium w-16 text-center">
            current
          </span>
          <span className="text-neutral-800 ml-2">
            building ai agents that actually work
          </span>
        </div>
        <div className="flex items-center rounded-full px-3 py-1">
          <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-medium w-16 text-center">
            prev
          </span>
          <span className="text-neutral-800 ml-2">
            yale mba • apple • two exits • founding engineer
          </span>
        </div>
      </div>
    </section>
  );
};