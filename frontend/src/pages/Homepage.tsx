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
          <span className="text-neutral-600">
            multi-agent systems • semantic interfaces • ai that learns
          </span>
        </div>

        {/* before */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
          <span className="inline-block bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs font-medium border border-neutral-300">
            before
          </span>
          <span className="text-neutral-600">
            yale • apple • computer science • product management • two
            exits
          </span>
        </div>

        <div className="text-base leading-relaxed text-neutral-600 space-y-6">
          {/* Who am I */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-1 lowercase">
              who am i
            </h2>
            <p>
              I’m an engineer, founder, and late bloomer—drawn to the
              intersection of human creativity and machine intelligence.
              My journey has taken me from product management to
              building systems that feel alive, where the whole becomes
              greater than the sum of its parts. I believe that{" "}
              <span className="font-medium text-green-600">
                creativity is a resonance of patterns
              </span>{" "}
              already present in nature, and I’m always seeking to{" "}
              <span className="font-medium text-green-600">
                bridge what is with what could be
              </span>
              .
            </p>
          </div>

          {/* What am I good at */}
          <div className="gap-2 flex flex-col">
            <h2 className="text-lg font-semibold text-neutral-900 mb-1 lowercase">
              what am i good at
            </h2>
            <p>
              I thrive at{" "}
              <span className="font-medium text-green-600">
                decomposing complex problems
              </span>{" "}
              to first principles and building from the ground up. My
              strengths lie in{" "}
              <span className="font-medium text-green-600">
                systems thinking
              </span>
              , product intuition, and technical depth—whether it’s
              designing AI architectures, launching ventures, or
              connecting ideas across disciplines. I’ve learned that the
              best products emerge from the{" "}
              <span className="font-medium text-green-600">
                intersection of human insight and technical possibility
              </span>
              .
            </p>
            <p>
              The biggest unlock for me was{" "}
              <span className="font-medium text-green-600">
                learning from AI itself
              </span>
              —now, I can teach myself anything fast. I build on a
              foundation of computer science, biology, and physics, and
              I’m always ready to{" "}
              <span className="font-medium text-green-600">
                dive deep
              </span>
              , adapt, and{" "}
              <span className="font-medium text-green-600">
                learn what’s next
              </span>
              .
            </p>
          </div>

          {/* What interests me */}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-1 lowercase">
              what interests me
            </h2>
            <p>
              I’m fascinated by{" "}
              <span className="font-medium text-green-600">
                self-improving agents
              </span>
              , memory as the root of identity, and{" "}
              <span className="font-medium text-green-600">
                emergent behavior
              </span>{" "}
              in organic and artificial systems. My current focus is on
              building{" "}
              <span className="font-medium text-green-600">
                autonomous AI agents
              </span>{" "}
              and novel cognitive architectures inspired by
              biology—systems that help talented people{" "}
              <span className="font-medium text-green-600">
                unlock their potential
              </span>
              .
            </p>
          </div>
        </div>

        {/* Interests and approach section */}
        <div className="mt-8 pt-6 border-t border-neutral-200 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-block bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs font-medium border border-neutral-300">
              interests
            </span>
            <span className="text-neutral-600">
              human potential • systems thinking • emergent behavior
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-block bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs font-medium border border-neutral-300">
              approach
            </span>
            <span className="text-neutral-600">
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
                className="text-green-600 hover:text-green-600 underline underline-offset-2 text-sm lowercase transition-colors hover:bg-green-50 px-2 py-1 rounded"
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
              className="group flex items-center gap-2 text-neutral-600 hover:text-green-600 text-base lowercase transition-colors"
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
