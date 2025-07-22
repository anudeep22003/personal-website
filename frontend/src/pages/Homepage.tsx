import React from "react";

const socialLinks = [
  {
    label: "linkedin",
    url: "https://www.linkedin.com/in/anudeepyegireddi/",
  },
  { label: "github", url: "https://github.com/anudeep22003" },
  { label: "twitter", url: "https://twitter.com/anudeepy_" },
  {
    label: "blog",
    url: "https://anudeep.posthaven.com/archive",
  },
];

const Homepage: React.FC = () => {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 flex flex-col gap-6 text-black m-4">
      {/* Enhanced elegant background treatment */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 -z-10 rounded-lg opacity-70" />
      <div className="relative border border-neutral-200/60 rounded-lg p-6 bg-white/85 backdrop-blur-sm shadow-sm ring-1 ring-neutral-100/80">
        <header className="flex flex-col gap-3 mt-4 mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-normal lowercase tracking-tight">
              anudeep yegireddi
            </h1>
            <div className="h-2 w-2 bg-neutral-400 rounded-full animate-pulse" />
          </div>
          <p className="text-base text-neutral-600 lowercase italic">
            engineer, founder, late bloomer
          </p>
        </header>

        {/* now */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
          <span className="inline-block bg-black text-white px-3 py-1.5 rounded-full text-xs font-medium">
            now
          </span>
          <span className="text-neutral-700">
            multi-agent systems • semantic interfaces • ai that learns
          </span>
        </div>

        {/* before */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
          <span className="inline-block bg-neutral-100 text-neutral-800 px-2 py-1 rounded-full text-xs font-medium border border-neutral-300">
            before
          </span>
          <span className="text-neutral-700">
            yale • apple • computer science • product management • two
            exits
          </span>
        </div>

        <div className="text-base leading-relaxed text-neutral-800 space-y-4">
          <p>
            i'm fascinated by the intersection of human creativity and
            machine intelligence. somewhere between rejections and
            revelations, i learned to see algorithms as poetry.
          </p>

          <p>
            i love building systems that feel alive—where the whole
            becomes greater than the sum of its parts. the universe
            doesn't care about cool ideas, only whether they solve real
            problems.
          </p>

          <p>
            my journey started in product management, but i felt drawn
            to deeper technical challenges. i taught myself to build,
            launched ventures, and learned that the best products emerge
            from the intersection of human insight and technical
            possibility.
          </p>
        </div>

        {/* Interests and approach section */}
        <div className="mt-8 pt-6 border-t border-neutral-200 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-block bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full text-xs font-medium border border-neutral-300">
              interests
            </span>
            <span className="text-neutral-700">
              human potential • systems thinking • emergent behavior
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-block bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full text-xs font-medium border border-neutral-300">
              approach
            </span>
            <span className="text-neutral-700">
              code as poetry • functional art • organic systems •
              biology
            </span>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-neutral-200">
          <span className="text-neutral-500 text-sm lowercase">
            find me here
          </span>
          <nav className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 underline underline-offset-2 text-sm lowercase transition-colors hover:bg-green-50 px-2 py-1 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Resume link */}
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <div className="flex items-center justify-between">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-neutral-700 hover:text-green-600 text-base lowercase transition-colors"
            >
              <span className="underline underline-offset-2">
                see my resume
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </a>
            <span className="inline-block bg-gradient-to-r from-neutral-200 to-neutral-300 text-neutral-600 px-2 py-1 rounded-full text-xs">
              pdf
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
